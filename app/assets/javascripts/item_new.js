$(function() {
  // ドロップリストの選択肢をjsonデータからhtmlにする関数
  var firstSelecthtml = `<option value="---">---</option>`;
  function foamHtml(search_result) {
    var html = `<option value="${search_result.id}">${
      search_result.name
    }</option>`;
    return html;
  }
  // 初期設定：後から出てくるドロップダウンリストをdisplay：noneで隠す
  $(".new_item .root-of-delivery_type-for-css").css("display", "none");
  $(".new_item .item__detail__form_box__size").css("display", "none");
  $(".new_item .child_id")
    .parent()
    .css("display", "none");
  $(".new_item .grandchild_id")
    .parent()
    .css("display", "none");
  $(".new_item .item__detail__form_box__brand").css("display", "none");
  // 親カテゴリーが入力されたとき子カテゴリーを生成
  $(".new_item .parent_id").change(function() {
    var parent_id = $(".new_item .parent_id").val();
    if (parent_id === "---") {
      $(".new_item .child_id")
        .parent()
        .css("display", "none");
      $(".new_item .grandchild_id")
        .parent()
        .css("display", "none");
    } else {
      $.ajax({
        type: "GET",
        url: "/items/search_category",
        data: { parent_id: parent_id },
        dataType: "json"
      }).done(function(child_ids) {
        $(".new_item .child_id").empty();
        $(".new_item .child_id")
          .parent()
          // display:noneの解除
          .css("display", "");
        $(".new_item .child_id").append(firstSelecthtml);
        child_ids.forEach(function(child) {
          var html = foamHtml(child);
          $(".new_item .child_id").append(html);
        });
      });
    }
  });
  // 子カテゴリーが入力されたとき孫カテゴリーを生成
  $(".new_item .child_id").change(function() {
    // var input = $(".search__query").val();
    var parent_id = $(".new_item .child_id").val();
    if (parent_id === "---") {
      $(".new_item .grandchild_id")
        .parent()
        .css("display", "none");
      $(".new_item .item__detail__form_box__size").css("display", "none");
    } else {
      $.ajax({
        type: "GET",
        url: "/items/search_category",
        data: { parent_id: parent_id },
        dataType: "json"
      }).done(function(child_ids) {
        $(".new_item .grandchild_id").empty();
        $(".new_item .grandchild_id").append(firstSelecthtml);
        $(".new_item .grandchild_id")
          .parent()
          .css("display", "");
        if (child_ids.length == 1) {
          $(".new_item .grandchild_id").empty();
          $(".new_item .grandchild_id")
            .parent()
            .css("display", "none");
        }
        child_ids.forEach(function(child) {
          var html = foamHtml(child);
          $(".new_item .grandchild_id").append(html);
        });
      });
    }
  });

  // 孫カテゴリーが入力されたときサイズカテゴリーを生成
  $(".new_item .grandchild_id").change(function() {
    var parent_id = $(".new_item .grandchild_id").val();
    if (parent_id === "---") {
      $(".new_item .size_id").empty();
      $(".new_item .size_id").append(firstSelecthtml);
    } else {
      $.ajax({
        type: "GET",
        url: "/items/search_category",
        data: { parent_id: parent_id },
        dataType: "json"
      }).done(function(size_ids) {
        $(".new_item .size_id").empty();
        $(".new_item .size_id").append(firstSelecthtml);
        $(".new_item .item__detail__form_box__size").css("display", "");
        $(".new_item .item__detail__form_box__brand").css("display", "");
        // size_idsが１の時はサイズがない時なので場合分け
        if (size_ids.length == 1) {
          $(".new_item .size_id").empty();
          $(".new_item .item__detail__form_box__size").css("display", "none");
        }
        size_ids.forEach(function(size) {
          var html = foamHtml(size);
          $(".new_item .size_id").append(html);
        });
      });
    }
  });

  // 配送料の支払い元が確定した時点で配送方法のドロップダウンリストを生成。
  $(".new_item #item_delivery_fee_payer").change(function() {
    var fee_payer = $(".new_item #item_delivery_fee_payer").val();
    $(".new_item #item_delivery_type").empty();
    $(".new_item #item_delivery_type").append(firstSelecthtml);
    if (fee_payer == "---") {
      $(".new_item .root-of-delivery_type-for-css").attr(
        "style",
        "display: none !important;"
      );
    } else if (fee_payer == "送料込み（出品者負担）") {
      $(".new_item .root-of-delivery_type-for-css").css("display", "");
      $(".new_item #item_delivery_type").append(
        ' <option value="未定">未定</option>\
      <option value="らくらくメルカリ便">らくらくメルカリ便</option>\
      <option value="ゆうメール">ゆうメール</option>\
      <option value="レターパック">レターパック</option>\
      <option value="普通郵便(定形、定形外)">普通郵便(定形、定形外)</option>\
      <option value="クロネコヤマト">クロネコヤマト</option>\
      <option value="ゆうパック">ゆうパック</option>\
      <option value="クリックポスト">クリックポスト</option>\
      <option value="ゆうパケット">ゆうパケット</option>'
      );
    } else if (fee_payer == "着払い（購入者負担）") {
      $(".new_item .root-of-delivery_type-for-css").css("display", "");
      $(".new_item #item_delivery_type").append(
        ' <option value="未定">未定</option>\
      <option value="クロネコヤマト">クロネコヤマト</option>\
      <option value="ゆうパック">ゆうパック</option>\
      <option value="ゆうメール">ゆうメール</option>\
      <option value="ゆうパック">ゆうパック</option>'
      );
    }
  });

  // 購入金額から手数料を計算する関数
  $(".sell-price__text_area_2").on("keyup", function() {
    var input = $(".sell-price__text_area_2").val();
    var fee = parseInt(input / 10);
    if (isNaN(fee) == false && input >= 300 && input <= 9999999) {
      $(".mercari-share").val(fee);
      $(".seller-share").val(input - fee);
    } else {
      $(".mercari-share").val("-");
      $(".seller-share").val("-");
    }
  });
});

$(function() {
  $("#item_brand_id").autocomplete({
    autoFocus: true,
    source: "/items/auto_complete.json",
    minLength: 1,
    delay: 0
  });
});
