module ItemsHelper
  def get_category_name
    {'---':'---','レディース':'1','メンズ':'2','ベビー・キッズ':'3','インテリア・住まい・小物':'4','本・音楽・ゲーム':'5','おもちゃ・ホビー・グッズ':'6','コスメ・香水・美容':'7','家電・スマホ・カメラ':'8','スポーツ・レジャー':'9','ハンドメイド':'10','チケット':'11','自転車・オートバイ':'12','その他':'13'}
  end

  def get_size_name
    {'---':'---','XXS以下':'1','XS(SS)':'2','S':'3','M':'4','L':'5','XL(LL)':'6','2XL(3L)':'7','3XL(4L)':'8','4XL(5L)以上':'9','FREE SIZE':'10'}
  end

  def get_condition
    {'---':'---','新品、未使用':'新品、未使用','未使用に近い':'未使用に近い','目立った傷や汚れなし':'目立った傷や汚れなし','やや傷や汚れあり':'やや傷や汚れあり','傷や汚れあり':'傷や汚れあり','全体的に状態が悪い':'全体的に状態が悪い'}
  end

  def get_delivery_fee_payer
    {'---':'---','送料込み（出品者負担）':'送料込み（出品者負担）','着払い（購入者負担）':'着払い（購入者負担）'}
  end

  def get_delivery_type
    {'---':'---','未定':'未定','らくらくメルカリ便':'らくらくメルカリ便','ゆうメール':'ゆうメール','レターパック':'レターパック','普通郵便(定形、定形外)':'普通郵便(定形、定形外)','クロネコヤマト':'クロネコヤマト','ゆうパック':'ゆうパック','クリックポスト':'クリックポスト','ゆうパケット':'ゆうパケット'}
  end


  def get_delivery_from_area
    {'---':'---','北海道':'北海道','青森県':'青森県','岩手県':'岩手県','宮城県':'宮城県','秋田県':'秋田県','山形県':'山形県','福島県':'福島県','東京都':'東京都','神奈川県':'神奈川県','埼玉県':'埼玉県','千葉県':'千葉県','茨城県':'茨城県','栃木県':'栃木県','群馬県':'群馬県','山梨県':'山梨県','新潟県':'新潟県','長野県':'長野県','富山県':'富山県','石川県':'石川県','福井県':'福井県','愛知県':'愛知県','岐阜県':'岐阜県','静岡県':'静岡県','三重県':'三重県','大阪府':'大阪府','兵庫県':'兵庫県','京都府':'京都府','滋賀県':'滋賀県','奈良県':'奈良県','和歌山県':'和歌山県','鳥取県':'鳥取県','島根県':'島根県','岡山県':'岡山県','広島県':'広島県','山口県':'山口県','徳島県':'徳島県','香川県':'香川県','愛媛県':'愛媛県','高知県':'高知県','福岡県':'福岡県','佐賀県':'佐賀県','長崎県':'長崎県','熊本県':'熊本県','大分県':'大分県','宮崎県':'宮崎県','鹿児島県':'鹿児島県','沖縄県':'沖縄県'}
  end

  def get_delivery_days
    {'---':'---','1~2日で発送':'1~2日で発送','2~3日で発送':'2~3日で発送','4~7日で発送':'4~7日で発送'}
  end



end
