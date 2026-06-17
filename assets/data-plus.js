/* ===== Hành Trình Tiếng Nhật — data-plus.js =====
   Mở rộng window.DATA: trình độ N4→N1, giao tiếp (kaiwa), từ vựng chuyên ngành.
   Tải SAU data.js và TRƯỚC app.js. N5 dùng lại D.grammar / D.vocab / D.kanji. */
(function(){
"use strict";
var D = window.DATA || (window.DATA = {});

/* ---------------- TRÌNH ĐỘ N4 → N1 ---------------- */
D.levels = {

/* ===== N4 ===== */
N4: {
  grammar: [
    {chip:"N4", accent:"sky", title:"～たことがある (kinh nghiệm)", formula:"V(thể た) ＋ ことがある",
     points:["Diễn tả việc đã từng làm/trải nghiệm trong quá khứ."],
     examples:[{jp:"日本へ行ったことがあります。",romaji:"Nihon e itta koto ga arimasu.",vi:"Tôi đã từng đi Nhật."}]},
    {chip:"N4", accent:"mint", title:"～ことができる (có thể)", formula:"V(thể từ điển) ＋ ことができる",
     points:["Diễn tả khả năng làm được việc gì."],
     examples:[{jp:"日本語を話すことができます。",romaji:"Nihongo o hanasu koto ga dekimasu.",vi:"Tôi có thể nói tiếng Nhật."}]},
    {chip:"N4", accent:"purple", title:"～たほうがいい (nên)", formula:"V(thể た) ／ V(ない) ＋ ほうがいい",
     points:["Khuyên ai đó nên hoặc không nên làm gì."],
     examples:[{jp:"早く寝たほうがいいですよ。",romaji:"Hayaku neta hou ga ii desu yo.",vi:"Bạn nên ngủ sớm đi."}]},
    {chip:"N4", accent:"pink", title:"～なければならない (phải)", formula:"V(ない bỏ い→なければ) ＋ ならない",
     points:["Diễn tả nghĩa vụ, bắt buộc phải làm."],
     examples:[{jp:"薬を飲まなければなりません。",romaji:"Kusuri o nomanakereba narimasen.",vi:"Tôi phải uống thuốc."}]},
    {chip:"N4", accent:"yellow", title:"～てもいい (được phép)", formula:"V(thể て) ＋ もいい",
     points:["Xin/cho phép làm việc gì đó."],
     examples:[{jp:"ここで写真を撮ってもいいですか。",romaji:"Koko de shashin o tottemo ii desu ka.",vi:"Tôi chụp ảnh ở đây được không?"}]},
    {chip:"N4", accent:"sky", title:"～てはいけない (không được)", formula:"V(thể て) ＋ はいけない",
     points:["Cấm đoán, không được phép làm."],
     examples:[{jp:"ここでタバコを吸ってはいけません。",romaji:"Koko de tabako o sutte wa ikemasen.",vi:"Không được hút thuốc ở đây."}]},
    {chip:"N4", accent:"mint", title:"～つもりです (dự định)", formula:"V(thể từ điển) ＋ つもり",
     points:["Diễn tả dự định, ý định của bản thân."],
     examples:[{jp:"来年留学するつもりです。",romaji:"Rainen ryuugaku suru tsumori desu.",vi:"Năm sau tôi dự định đi du học."}]},
    {chip:"N4", accent:"purple", title:"～と思います (nghĩ rằng)", formula:"Thể thường ＋ と思う",
     points:["Nêu suy nghĩ, ý kiến, phỏng đoán."],
     examples:[{jp:"明日は雨だと思います。",romaji:"Ashita wa ame da to omoimasu.",vi:"Tôi nghĩ ngày mai trời mưa."}]},
    {chip:"N4", accent:"pink", title:"～たら (nếu/khi)", formula:"V(thể た) ＋ ら",
     points:["Điều kiện: nếu/khi… thì…"],
     examples:[{jp:"日本へ行ったら、寿司を食べたいです。",romaji:"Nihon e ittara, sushi o tabetai desu.",vi:"Nếu đi Nhật, tôi muốn ăn sushi."}]},
    {chip:"N4", accent:"yellow", title:"～ながら (vừa…vừa)", formula:"V(thể ます bỏ ます) ＋ ながら",
     points:["Hai hành động xảy ra đồng thời bởi một người."],
     examples:[{jp:"音楽を聞きながら勉強します。",romaji:"Ongaku o kikinagara benkyou shimasu.",vi:"Vừa nghe nhạc vừa học."}]},
    {chip:"N4", accent:"sky", title:"～ても (dù…cũng)", formula:"V(thể て) ＋ も",
     points:["Nhượng bộ: dù… thì vẫn…"],
     examples:[{jp:"雨が降っても行きます。",romaji:"Ame ga futtemo ikimasu.",vi:"Dù trời mưa tôi vẫn đi."}]},
    {chip:"N4", accent:"mint", title:"～し～し (vừa…lại…)", formula:"Thể thường ＋ し",
     points:["Liệt kê lý do hoặc đặc điểm song song."],
     examples:[{jp:"この店は安いし、おいしいです。",romaji:"Kono mise wa yasui shi, oishii desu.",vi:"Quán này vừa rẻ lại ngon."}]}
  ],
  vocab: [
    {title:"Động từ thường gặp", items:[
      {jp:"連れて行く",romaji:"tsurete iku",vi:"dẫn đi"},
      {jp:"用意する",romaji:"youi suru",vi:"chuẩn bị (sẵn)"},
      {jp:"確認する",romaji:"kakunin suru",vi:"xác nhận"},
      {jp:"説明する",romaji:"setsumei suru",vi:"giải thích"},
      {jp:"案内する",romaji:"annai suru",vi:"hướng dẫn, dẫn đường"},
      {jp:"故障する",romaji:"koshou suru",vi:"hỏng hóc"},
      {jp:"利用する",romaji:"riyou suru",vi:"sử dụng"},
      {jp:"連絡する",romaji:"renraku suru",vi:"liên lạc"},
      {jp:"比べる",romaji:"kuraberu",vi:"so sánh"},
      {jp:"決める",romaji:"kimeru",vi:"quyết định"},
      {jp:"育てる",romaji:"sodateru",vi:"nuôi dưỡng"},
      {jp:"続ける",romaji:"tsuzukeru",vi:"tiếp tục"},
      {jp:"間違える",romaji:"machigaeru",vi:"nhầm lẫn"},
      {jp:"慣れる",romaji:"nareru",vi:"quen với"},
      {jp:"戻る",romaji:"modoru",vi:"quay lại"}
    ]},
    {title:"Tính từ", items:[
      {jp:"複雑（な）",romaji:"fukuzatsu",vi:"phức tạp"},
      {jp:"簡単（な）",romaji:"kantan",vi:"đơn giản"},
      {jp:"安全（な）",romaji:"anzen",vi:"an toàn"},
      {jp:"危険（な）",romaji:"kiken",vi:"nguy hiểm"},
      {jp:"大切（な）",romaji:"taisetsu",vi:"quan trọng"},
      {jp:"必要（な）",romaji:"hitsuyou",vi:"cần thiết"},
      {jp:"自由（な）",romaji:"jiyuu",vi:"tự do"},
      {jp:"丁寧（な）",romaji:"teinei",vi:"lịch sự, cẩn thận"},
      {jp:"熱心（な）",romaji:"nesshin",vi:"nhiệt tình"},
      {jp:"厳しい",romaji:"kibishii",vi:"nghiêm khắc"},
      {jp:"細かい",romaji:"komakai",vi:"chi tiết, nhỏ nhặt"},
      {jp:"深い",romaji:"fukai",vi:"sâu"}
    ]},
    {title:"Danh từ & trạng từ", items:[
      {jp:"経済",romaji:"keizai",vi:"kinh tế"},
      {jp:"文化",romaji:"bunka",vi:"văn hóa"},
      {jp:"社会",romaji:"shakai",vi:"xã hội"},
      {jp:"関係",romaji:"kankei",vi:"quan hệ"},
      {jp:"理由",romaji:"riyuu",vi:"lý do"},
      {jp:"原因",romaji:"gen'in",vi:"nguyên nhân"},
      {jp:"結果",romaji:"kekka",vi:"kết quả"},
      {jp:"締め切り",romaji:"shimekiri",vi:"hạn chót"},
      {jp:"将来",romaji:"shourai",vi:"tương lai"},
      {jp:"最近",romaji:"saikin",vi:"gần đây"},
      {jp:"急に",romaji:"kyuu ni",vi:"đột nhiên"},
      {jp:"必ず",romaji:"kanarazu",vi:"nhất định, chắc chắn"},
      {jp:"例えば",romaji:"tatoeba",vi:"ví dụ"},
      {jp:"特に",romaji:"toku ni",vi:"đặc biệt là"},
      {jp:"たぶん",romaji:"tabun",vi:"có lẽ"},
      {jp:"ほとんど",romaji:"hotondo",vi:"hầu hết"}
    ]}
  ],
  kanji: [
    {title:"Kanji N4 thường gặp", items:[
      {ch:"口",mean:"miệng; khẩu",on:"コウ",kun:"くち",samples:["人口（じんこう）","入口（いりぐち）"]},
      {ch:"手",mean:"tay; thủ",on:"シュ",kun:"て",samples:["手紙（てがみ）","上手（じょうず）"]},
      {ch:"力",mean:"sức; lực",on:"リョク",kun:"ちから",samples:["電力（でんりょく）","力（ちから）"]},
      {ch:"兄",mean:"anh trai; huynh",on:"ケイ",kun:"あに",samples:["兄弟（きょうだい）","兄（あに）"]},
      {ch:"姉",mean:"chị gái; tỷ",on:"シ",kun:"あね",samples:["姉（あね）"]},
      {ch:"弟",mean:"em trai; đệ",on:"テイ",kun:"おとうと",samples:["兄弟（きょうだい）"]},
      {ch:"妹",mean:"em gái; muội",on:"マイ",kun:"いもうと",samples:["妹（いもうと）"]},
      {ch:"朝",mean:"buổi sáng; triêu",on:"チョウ",kun:"あさ",samples:["朝ご飯（あさごはん）","今朝（けさ）"]},
      {ch:"昼",mean:"buổi trưa; trú",on:"チュウ",kun:"ひる",samples:["昼ご飯（ひるごはん）"]},
      {ch:"夜",mean:"ban đêm; dạ",on:"ヤ",kun:"よる",samples:["今夜（こんや）"]},
      {ch:"春",mean:"mùa xuân; xuân",on:"シュン",kun:"はる",samples:["春休み（はるやすみ）"]},
      {ch:"夏",mean:"mùa hè; hạ",on:"カ",kun:"なつ",samples:["夏休み（なつやすみ）"]},
      {ch:"秋",mean:"mùa thu; thu",on:"シュウ",kun:"あき",samples:["秋（あき）"]},
      {ch:"冬",mean:"mùa đông; đông",on:"トウ",kun:"ふゆ",samples:["冬（ふゆ）"]},
      {ch:"風",mean:"gió; phong",on:"フウ",kun:"かぜ",samples:["台風（たいふう）"]},
      {ch:"雪",mean:"tuyết",on:"セツ",kun:"ゆき",samples:["雪（ゆき）"]},
      {ch:"海",mean:"biển; hải",on:"カイ",kun:"うみ",samples:["海（うみ）"]},
      {ch:"空",mean:"bầu trời; không",on:"クウ",kun:"そら",samples:["空港（くうこう）"]},
      {ch:"親",mean:"cha mẹ; thân",on:"シン",kun:"おや",samples:["両親（りょうしん）"]},
      {ch:"体",mean:"cơ thể; thể",on:"タイ",kun:"からだ",samples:["体（からだ）"]},
      {ch:"教",mean:"dạy; giáo",on:"キョウ",kun:"おし.える",samples:["教室（きょうしつ）"]},
      {ch:"紙",mean:"giấy; chỉ",on:"シ",kun:"かみ",samples:["手紙（てがみ）"]},
      {ch:"計",mean:"tính; kế",on:"ケイ",kun:"はか.る",samples:["時計（とけい）"]},
      {ch:"親",mean:"thân thiết; thân",on:"シン",kun:"した.しい",samples:["親切（しんせつ）"]}
    ]}
  ]
},

/* ===== N3 ===== */
N3: {
  grammar: [
    {chip:"N3", accent:"purple", title:"～ば～ほど (càng…càng…)", formula:"V(thể ば) ＋ V(từ điển) ＋ ほど",
     points:["Mức độ thay đổi tỉ lệ thuận."],
     examples:[{jp:"練習すればするほど上手になります。",romaji:"Renshuu sureba suru hodo jouzu ni narimasu.",vi:"Càng luyện tập càng giỏi."}]},
    {chip:"N3", accent:"sky", title:"～ようにする (cố gắng làm)", formula:"V(từ điển/ない) ＋ ようにする",
     points:["Nỗ lực duy trì một thói quen, hành động."],
     examples:[{jp:"毎日運動するようにしています。",romaji:"Mainichi undou suru you ni shiteimasu.",vi:"Tôi cố gắng tập thể dục mỗi ngày."}]},
    {chip:"N3", accent:"mint", title:"～ようになる (trở nên)", formula:"V(từ điển/khả năng) ＋ ようになる",
     points:["Sự thay đổi trạng thái, khả năng."],
     examples:[{jp:"日本語が話せるようになりました。",romaji:"Nihongo ga hanaseru you ni narimashita.",vi:"Tôi đã nói được tiếng Nhật rồi."}]},
    {chip:"N3", accent:"pink", title:"～ために (để / vì)", formula:"V(từ điển) ／ N の ＋ ために",
     points:["Mục đích hoặc nguyên nhân."],
     examples:[{jp:"健康のために野菜を食べます。",romaji:"Kenkou no tame ni yasai o tabemasu.",vi:"Vì sức khỏe nên tôi ăn rau."}]},
    {chip:"N3", accent:"yellow", title:"～はずです (chắc chắn là)", formula:"Thể thường ＋ はず",
     points:["Suy đoán có căn cứ, lẽ ra phải vậy."],
     examples:[{jp:"彼はもう着いているはずです。",romaji:"Kare wa mou tsuiteiru hazu desu.",vi:"Anh ấy chắc đã đến rồi."}]},
    {chip:"N3", accent:"sky", title:"～らしい (nghe nói / có vẻ)", formula:"Thể thường ＋ らしい",
     points:["Truyền đạt thông tin nghe được, suy đoán."],
     examples:[{jp:"彼は来月結婚するらしいです。",romaji:"Kare wa raigetsu kekkon suru rashii desu.",vi:"Nghe nói tháng sau anh ấy cưới."}]},
    {chip:"N3", accent:"purple", title:"～そうだ (nghe nói - truyền đạt)", formula:"Thể thường ＋ そうだ",
     points:["Truyền đạt nguyên văn thông tin từ nguồn khác."],
     examples:[{jp:"天気予報によると明日は雨だそうだ。",romaji:"Tenki yohou ni yoru to ashita wa ame da sou da.",vi:"Theo dự báo, nghe nói mai trời mưa."}]},
    {chip:"N3", accent:"mint", title:"～ようだ / みたいだ (có vẻ như)", formula:"Thể thường ＋ ようだ",
     points:["Phán đoán dựa trên quan sát của bản thân."],
     examples:[{jp:"誰かいるようだ。",romaji:"Dareka iru you da.",vi:"Có vẻ như có ai đó."}]},
    {chip:"N3", accent:"pink", title:"～場合は (trong trường hợp)", formula:"V ／ N の ＋ 場合は",
     points:["Nêu tình huống giả định và cách xử lý."],
     examples:[{jp:"遅れる場合は連絡してください。",romaji:"Okureru baai wa renraku shite kudasai.",vi:"Trường hợp đến trễ hãy liên lạc."}]},
    {chip:"N3", accent:"yellow", title:"～について (về việc)", formula:"N ＋ について",
     points:["Nêu chủ đề, đối tượng đề cập."],
     examples:[{jp:"日本の文化について研究しています。",romaji:"Nihon no bunka ni tsuite kenkyuu shiteimasu.",vi:"Tôi đang nghiên cứu về văn hóa Nhật."}]},
    {chip:"N3", accent:"sky", title:"～によって (tùy theo / bởi)", formula:"N ＋ によって",
     points:["Sự khác biệt tùy theo, hoặc tác nhân."],
     examples:[{jp:"人によって考え方が違います。",romaji:"Hito ni yotte kangaekata ga chigaimasu.",vi:"Tùy người mà cách nghĩ khác nhau."}]},
    {chip:"N3", accent:"purple", title:"～たびに (mỗi khi)", formula:"V(từ điển) ／ N の ＋ たびに",
     points:["Cứ mỗi lần… thì…"],
     examples:[{jp:"この歌を聞くたびに故郷を思い出す。",romaji:"Kono uta o kiku tabi ni furusato o omoidasu.",vi:"Mỗi khi nghe bài này lại nhớ quê."}]}
  ],
  vocab: [
    {title:"Danh từ trừu tượng", items:[
      {jp:"影響",romaji:"eikyou",vi:"ảnh hưởng"},
      {jp:"環境",romaji:"kankyou",vi:"môi trường"},
      {jp:"状況",romaji:"joukyou",vi:"tình huống"},
      {jp:"提案",romaji:"teian",vi:"đề xuất"},
      {jp:"解決",romaji:"kaiketsu",vi:"giải quyết"},
      {jp:"努力",romaji:"doryoku",vi:"nỗ lực"},
      {jp:"我慢",romaji:"gaman",vi:"nhẫn nhịn, chịu đựng"},
      {jp:"印象",romaji:"inshou",vi:"ấn tượng"},
      {jp:"性格",romaji:"seikaku",vi:"tính cách"},
      {jp:"責任",romaji:"sekinin",vi:"trách nhiệm"},
      {jp:"期待",romaji:"kitai",vi:"kỳ vọng"},
      {jp:"緊張",romaji:"kinchou",vi:"căng thẳng, hồi hộp"},
      {jp:"後悔",romaji:"koukai",vi:"hối hận"},
      {jp:"満足",romaji:"manzoku",vi:"hài lòng"},
      {jp:"自信",romaji:"jishin",vi:"tự tin"}
    ]},
    {title:"Động từ", items:[
      {jp:"含む",romaji:"fukumu",vi:"bao gồm"},
      {jp:"預ける",romaji:"azukeru",vi:"gửi (đồ)"},
      {jp:"諦める",romaji:"akirameru",vi:"từ bỏ"},
      {jp:"防ぐ",romaji:"fusegu",vi:"phòng ngừa"},
      {jp:"与える",romaji:"ataeru",vi:"cho, ban cho"},
      {jp:"求める",romaji:"motomeru",vi:"yêu cầu, tìm kiếm"},
      {jp:"認める",romaji:"mitomeru",vi:"thừa nhận"},
      {jp:"断る",romaji:"kotowaru",vi:"từ chối"},
      {jp:"預かる",romaji:"azukaru",vi:"giữ hộ"},
      {jp:"訪ねる",romaji:"tazuneru",vi:"ghé thăm"},
      {jp:"重なる",romaji:"kasanaru",vi:"chồng lên, trùng nhau"},
      {jp:"占める",romaji:"shimeru",vi:"chiếm (tỉ lệ)"}
    ]},
    {title:"Tính từ & trạng từ", items:[
      {jp:"重要（な）",romaji:"juuyou",vi:"quan trọng"},
      {jp:"適当（な）",romaji:"tekitou",vi:"phù hợp; qua loa"},
      {jp:"正確（な）",romaji:"seikaku",vi:"chính xác"},
      {jp:"明らか（な）",romaji:"akiraka",vi:"rõ ràng"},
      {jp:"意外（な）",romaji:"igai",vi:"bất ngờ"},
      {jp:"派手（な）",romaji:"hade",vi:"sặc sỡ"},
      {jp:"地味（な）",romaji:"jimi",vi:"giản dị, nhạt"},
      {jp:"主に",romaji:"omo ni",vi:"chủ yếu"},
      {jp:"実は",romaji:"jitsu wa",vi:"thực ra"},
      {jp:"わざと",romaji:"waza to",vi:"cố ý"}
    ]}
  ],
  kanji: [
    {title:"Kanji N3 thường gặp", items:[
      {ch:"増",mean:"tăng; tăng",on:"ゾウ",kun:"ふ.える",samples:["増加（ぞうか）"]},
      {ch:"減",mean:"giảm; giảm",on:"ゲン",kun:"へ.る",samples:["減少（げんしょう）"]},
      {ch:"比",mean:"so sánh; tỉ",on:"ヒ",kun:"くら.べる",samples:["比較（ひかく）"]},
      {ch:"例",mean:"ví dụ; lệ",on:"レイ",kun:"たと.える",samples:["例えば（たとえば）"]},
      {ch:"認",mean:"công nhận; nhận",on:"ニン",kun:"みと.める",samples:["確認（かくにん）"]},
      {ch:"解",mean:"giải; giải",on:"カイ",kun:"と.く",samples:["解決（かいけつ）"]},
      {ch:"決",mean:"quyết; quyết",on:"ケツ",kun:"き.める",samples:["決定（けってい）"]},
      {ch:"結",mean:"kết; kết",on:"ケツ",kun:"むす.ぶ",samples:["結果（けっか）"]},
      {ch:"果",mean:"quả; quả",on:"カ",kun:"は.たす",samples:["結果（けっか）"]},
      {ch:"原",mean:"nguyên; nguyên",on:"ゲン",kun:"はら",samples:["原因（げんいん）"]},
      {ch:"因",mean:"nhân; nhân",on:"イン",kun:"よ.る",samples:["原因（げんいん）"]},
      {ch:"想",mean:"tưởng; tưởng",on:"ソウ",kun:"おも.う",samples:["想像（そうぞう）"]},
      {ch:"観",mean:"quan; quan",on:"カン",kun:"み.る",samples:["観光（かんこう）"]},
      {ch:"光",mean:"ánh sáng; quang",on:"コウ",kun:"ひかり",samples:["観光（かんこう）"]},
      {ch:"議",mean:"nghị; nghị",on:"ギ",kun:"—",samples:["会議（かいぎ）"]},
      {ch:"政",mean:"chính trị; chính",on:"セイ",kun:"まつりごと",samples:["政治（せいじ）"]},
      {ch:"治",mean:"trị; trị",on:"ジ",kun:"おさ.める",samples:["政治（せいじ）"]},
      {ch:"経",mean:"trải qua; kinh",on:"ケイ",kun:"へ.る",samples:["経済（けいざい）"]},
      {ch:"済",mean:"xong; tế",on:"サイ",kun:"す.む",samples:["経済（けいざい）"]},
      {ch:"術",mean:"thuật; thuật",on:"ジュツ",kun:"—",samples:["技術（ぎじゅつ）"]}
    ]}
  ]
},

/* ===== N2 ===== */
N2: {
  grammar: [
    {chip:"N2", accent:"yellow", title:"～にもかかわらず (mặc dù)", formula:"Thể thường ＋ にもかかわらず",
     points:["Trái với điều lẽ ra mong đợi."],
     examples:[{jp:"努力したにもかかわらず失敗した。",romaji:"Doryoku shita ni mo kakawarazu shippai shita.",vi:"Mặc dù đã cố gắng nhưng vẫn thất bại."}]},
    {chip:"N2", accent:"pink", title:"～わけにはいかない (không thể…)", formula:"V(từ điển) ＋ わけにはいかない",
     points:["Vì lý do tâm lý/xã hội nên không thể làm."],
     examples:[{jp:"今日は休むわけにはいかない。",romaji:"Kyou wa yasumu wake ni wa ikanai.",vi:"Hôm nay không thể nghỉ được."}]},
    {chip:"N2", accent:"sky", title:"～ことになっている (theo quy định)", formula:"V(từ điển/ない) ＋ ことになっている",
     points:["Quy tắc, lịch trình đã được định sẵn."],
     examples:[{jp:"九時に集合することになっています。",romaji:"Kuji ni shuugou suru koto ni natteimasu.",vi:"Theo quy định, tập trung lúc 9 giờ."}]},
    {chip:"N2", accent:"mint", title:"～ざるを得ない (buộc phải)", formula:"V(ない bỏ ない) ＋ ざるを得ない",
     points:["Không còn lựa chọn nào khác."],
     examples:[{jp:"ルールだから従わざるを得ない。",romaji:"Ruuru da kara shitagawazaru o enai.",vi:"Vì là quy định nên buộc phải tuân theo."}]},
    {chip:"N2", accent:"purple", title:"～だけあって (quả nhiên, xứng đáng)", formula:"Thể thường ＋ だけあって",
     points:["Kết quả tương xứng với lý do/danh tiếng."],
     examples:[{jp:"プロだけあって、さすがに上手だ。",romaji:"Puro dake atte, sasuga ni jouzu da.",vi:"Quả nhiên là dân chuyên nghiệp nên rất giỏi."}]},
    {chip:"N2", accent:"yellow", title:"～に基づいて (dựa trên)", formula:"N ＋ に基づいて",
     points:["Lấy điều gì làm căn cứ, cơ sở."],
     examples:[{jp:"事実に基づいて報告する。",romaji:"Jijitsu ni motozuite houkoku suru.",vi:"Báo cáo dựa trên sự thật."}]},
    {chip:"N2", accent:"sky", title:"～に対して (đối với)", formula:"N ＋ に対して",
     points:["Nêu đối tượng hướng tới của hành động/thái độ."],
     examples:[{jp:"お客様に対して丁寧に対応する。",romaji:"Okyakusama ni taishite teinei ni taiou suru.",vi:"Đối với khách hàng phải tiếp đãi lịch sự."}]},
    {chip:"N2", accent:"pink", title:"～一方で (mặt khác)", formula:"Thể thường ＋ 一方で",
     points:["So sánh, đối lập hai mặt của sự việc."],
     examples:[{jp:"便利になる一方で、問題も増えた。",romaji:"Benri ni naru ippou de, mondai mo fueta.",vi:"Một mặt tiện hơn, mặt khác vấn đề cũng tăng."}]},
    {chip:"N2", accent:"mint", title:"～次第 (ngay khi)", formula:"V(ます bỏ ます) ＋ 次第",
     points:["Làm việc tiếp theo ngay sau khi việc trước xong."],
     examples:[{jp:"到着次第、連絡します。",romaji:"Touchaku shidai, renraku shimasu.",vi:"Ngay khi đến nơi tôi sẽ liên lạc."}]},
    {chip:"N2", accent:"purple", title:"～かのようだ (cứ như thể)", formula:"Thể thường ＋ かのようだ",
     points:["Ví von với điều không có thật."],
     examples:[{jp:"彼はまるで何も知らないかのようだ。",romaji:"Kare wa marude nani mo shiranai ka no you da.",vi:"Anh ta cứ như thể chẳng biết gì."}]}
  ],
  vocab: [
    {title:"Kinh tế & xã hội", items:[
      {jp:"傾向",romaji:"keikou",vi:"xu hướng"},
      {jp:"効率",romaji:"kouritsu",vi:"hiệu suất"},
      {jp:"効果",romaji:"kouka",vi:"hiệu quả"},
      {jp:"維持",romaji:"iji",vi:"duy trì"},
      {jp:"削減",romaji:"sakugen",vi:"cắt giảm"},
      {jp:"促進",romaji:"sokushin",vi:"thúc đẩy"},
      {jp:"改善",romaji:"kaizen",vi:"cải thiện"},
      {jp:"改革",romaji:"kaikaku",vi:"cải cách"},
      {jp:"普及",romaji:"fukyuu",vi:"phổ cập"},
      {jp:"需要",romaji:"juyou",vi:"nhu cầu"},
      {jp:"供給",romaji:"kyoukyuu",vi:"cung cấp"}
    ]},
    {title:"Tư duy & cấu trúc", items:[
      {jp:"把握",romaji:"haaku",vi:"nắm bắt"},
      {jp:"検討",romaji:"kentou",vi:"xem xét, cân nhắc"},
      {jp:"矛盾",romaji:"mujun",vi:"mâu thuẫn"},
      {jp:"概念",romaji:"gainen",vi:"khái niệm"},
      {jp:"要素",romaji:"youso",vi:"yếu tố"},
      {jp:"構造",romaji:"kouzou",vi:"cấu trúc"},
      {jp:"仕組み",romaji:"shikumi",vi:"cơ chế"},
      {jp:"対象",romaji:"taishou",vi:"đối tượng"},
      {jp:"範囲",romaji:"han'i",vi:"phạm vi"}
    ]},
    {title:"Động từ", items:[
      {jp:"及ぼす",romaji:"oyobosu",vi:"gây ra (ảnh hưởng)"},
      {jp:"伴う",romaji:"tomonau",vi:"kéo theo, đi kèm"},
      {jp:"訴える",romaji:"uttaeru",vi:"kêu gọi; kiện"},
      {jp:"補う",romaji:"oginau",vi:"bổ sung"},
      {jp:"費やす",romaji:"tsuiyasu",vi:"tiêu tốn"},
      {jp:"妨げる",romaji:"samatageru",vi:"cản trở"},
      {jp:"整える",romaji:"totonoeru",vi:"chỉnh đốn, sắp xếp"},
      {jp:"取り組む",romaji:"torikumu",vi:"nỗ lực giải quyết"}
    ]},
    {title:"Tính từ & trạng từ", items:[
      {jp:"明確（な）",romaji:"meikaku",vi:"rõ ràng, minh xác"},
      {jp:"慎重（な）",romaji:"shinchou",vi:"thận trọng"},
      {jp:"円滑（な）",romaji:"enkatsu",vi:"suôn sẻ"},
      {jp:"妥当（な）",romaji:"datou",vi:"hợp lý, thỏa đáng"},
      {jp:"あらゆる",romaji:"arayuru",vi:"mọi, tất cả"},
      {jp:"直ちに",romaji:"tadachi ni",vi:"ngay lập tức"},
      {jp:"著しく",romaji:"ichijirushiku",vi:"một cách đáng kể"},
      {jp:"一斉に",romaji:"issei ni",vi:"đồng loạt"}
    ]}
  ],
  kanji: [
    {title:"Kanji N2 thường gặp", items:[
      {ch:"効",mean:"hiệu lực; hiệu",on:"コウ",kun:"き.く",samples:["効果（こうか）"]},
      {ch:"率",mean:"tỉ lệ; suất",on:"リツ",kun:"ひき.いる",samples:["効率（こうりつ）"]},
      {ch:"維",mean:"duy; duy",on:"イ",kun:"—",samples:["維持（いじ）"]},
      {ch:"持",mean:"cầm, giữ; trì",on:"ジ",kun:"も.つ",samples:["維持（いじ）"]},
      {ch:"善",mean:"tốt; thiện",on:"ゼン",kun:"よ.い",samples:["改善（かいぜん）"]},
      {ch:"改",mean:"sửa; cải",on:"カイ",kun:"あらた.める",samples:["改善（かいぜん）"]},
      {ch:"革",mean:"đổi; cách",on:"カク",kun:"かわ",samples:["改革（かいかく）"]},
      {ch:"構",mean:"cấu; cấu",on:"コウ",kun:"かま.える",samples:["構造（こうぞう）"]},
      {ch:"造",mean:"tạo; tạo",on:"ゾウ",kun:"つく.る",samples:["構造（こうぞう）"]},
      {ch:"概",mean:"khái; khái",on:"ガイ",kun:"—",samples:["概念（がいねん）"]},
      {ch:"念",mean:"niệm; niệm",on:"ネン",kun:"—",samples:["概念（がいねん）"]},
      {ch:"範",mean:"phạm; phạm",on:"ハン",kun:"—",samples:["範囲（はんい）"]},
      {ch:"囲",mean:"vây quanh; vi",on:"イ",kun:"かこ.む",samples:["範囲（はんい）"]},
      {ch:"傾",mean:"nghiêng; khuynh",on:"ケイ",kun:"かたむ.く",samples:["傾向（けいこう）"]},
      {ch:"向",mean:"hướng; hướng",on:"コウ",kun:"む.く",samples:["傾向（けいこう）"]},
      {ch:"矛",mean:"giáo; mâu",on:"ム",kun:"ほこ",samples:["矛盾（むじゅん）"]},
      {ch:"盾",mean:"khiên; thuẫn",on:"ジュン",kun:"たて",samples:["矛盾（むじゅん）"]},
      {ch:"訴",mean:"kiện; tố",on:"ソ",kun:"うった.える",samples:["訴訟（そしょう）"]}
    ]}
  ]
},

/* ===== N1 ===== */
N1: {
  grammar: [
    {chip:"N1", accent:"pink", title:"～をものともせず (bất chấp)", formula:"N ＋ をものともせず",
     points:["Không nao núng trước khó khăn, trở ngại."],
     examples:[{jp:"困難をものともせず挑戦し続けた。",romaji:"Konnan o mono tomo sezu chousen shitsuzuketa.",vi:"Bất chấp khó khăn, vẫn tiếp tục thử thách."}]},
    {chip:"N1", accent:"purple", title:"～を余儀なくされる (buộc phải)", formula:"N ＋ を余儀なくされる",
     points:["Bị hoàn cảnh ép buộc, không thể tránh."],
     examples:[{jp:"経営難で閉店を余儀なくされた。",romaji:"Keieinan de heiten o yogi naku sareta.",vi:"Vì khó khăn kinh doanh nên buộc phải đóng cửa."}]},
    {chip:"N1", accent:"sky", title:"～にかたくない (không khó để)", formula:"N ／ V(từ điển) ＋ にかたくない",
     points:["Dễ dàng tưởng tượng/suy đoán được."],
     examples:[{jp:"彼の気持ちは想像にかたくない。",romaji:"Kare no kimochi wa souzou ni katakunai.",vi:"Không khó để tưởng tượng cảm xúc của anh ấy."}]},
    {chip:"N1", accent:"mint", title:"～が早いか (vừa…là ngay)", formula:"V(từ điển) ＋ が早いか",
     points:["Hai việc xảy ra gần như cùng lúc."],
     examples:[{jp:"ベルが鳴るが早いか、教室を出た。",romaji:"Beru ga naru ga hayai ka, kyoushitsu o deta.",vi:"Vừa nghe chuông reo là rời lớp ngay."}]},
    {chip:"N1", accent:"yellow", title:"～たりとも～ない (dù chỉ…cũng không)", formula:"N(一) ＋ たりとも ～ない",
     points:["Phủ định triệt để, dù lượng nhỏ nhất."],
     examples:[{jp:"一瞬たりとも油断できない。",romaji:"Isshun tari tomo yudan dekinai.",vi:"Dù chỉ một khoảnh khắc cũng không được lơ là."}]},
    {chip:"N1", accent:"pink", title:"～ならではの (chỉ riêng có của)", formula:"N ＋ ならではの",
     points:["Đặc trưng độc nhất, chỉ ở đối tượng đó mới có."],
     examples:[{jp:"この店ならではの味だ。",romaji:"Kono mise nara dewa no aji da.",vi:"Hương vị chỉ riêng quán này mới có."}]},
    {chip:"N1", accent:"sky", title:"～をよそに (phớt lờ, mặc kệ)", formula:"N ＋ をよそに",
     points:["Không quan tâm đến điều đáng lẽ phải để ý."],
     examples:[{jp:"親の心配をよそに遊び続けた。",romaji:"Oya no shinpai o yoso ni asobi tsuzuketa.",vi:"Mặc kệ nỗi lo của cha mẹ, vẫn tiếp tục chơi."}]},
    {chip:"N1", accent:"purple", title:"～きらいがある (có xu hướng xấu)", formula:"V(từ điển) ／ N の ＋ きらいがある",
     points:["Khuynh hướng không tốt, đáng phê phán."],
     examples:[{jp:"彼は物事を悪く考えるきらいがある。",romaji:"Kare wa monogoto o waruku kangaeru kirai ga aru.",vi:"Anh ấy có xu hướng nghĩ mọi thứ theo hướng xấu."}]}
  ],
  vocab: [
    {title:"Tính từ nâng cao", items:[
      {jp:"斬新（な）",romaji:"zanshin",vi:"mới mẻ, độc đáo"},
      {jp:"緻密（な）",romaji:"chimitsu",vi:"tỉ mỉ, kỹ lưỡng"},
      {jp:"曖昧（な）",romaji:"aimai",vi:"mơ hồ"},
      {jp:"厳密（な）",romaji:"genmitsu",vi:"nghiêm ngặt, chặt chẽ"},
      {jp:"著しい",romaji:"ichijirushii",vi:"đáng kể, rõ rệt"}
    ]},
    {title:"Danh từ Hán ngữ", items:[
      {jp:"潜在",romaji:"senzai",vi:"tiềm ẩn"},
      {jp:"顕在",romaji:"kenzai",vi:"hiển hiện"},
      {jp:"該当",romaji:"gaitou",vi:"tương ứng, thuộc về"},
      {jp:"趣旨",romaji:"shushi",vi:"ý chính, tôn chỉ"},
      {jp:"措置",romaji:"sochi",vi:"biện pháp xử lý"},
      {jp:"是正",romaji:"zesei",vi:"chỉnh sửa, uốn nắn"},
      {jp:"抑制",romaji:"yokusei",vi:"kiềm chế"},
      {jp:"享受",romaji:"kyouju",vi:"hưởng thụ"},
      {jp:"踏襲",romaji:"toushuu",vi:"kế thừa"},
      {jp:"払拭",romaji:"fusshoku",vi:"xóa bỏ"},
      {jp:"看過",romaji:"kanka",vi:"bỏ qua, làm ngơ"},
      {jp:"逸脱",romaji:"itsudatsu",vi:"đi chệch, lệch khỏi"},
      {jp:"網羅",romaji:"moura",vi:"bao quát toàn bộ"}
    ]},
    {title:"Động từ", items:[
      {jp:"携わる",romaji:"tazusawaru",vi:"tham gia (công việc)"},
      {jp:"賄う",romaji:"makanau",vi:"xoay xở, chu cấp"},
      {jp:"培う",romaji:"tsuchikau",vi:"bồi đắp, nuôi dưỡng"},
      {jp:"阻む",romaji:"habamu",vi:"cản trở"},
      {jp:"顧みる",romaji:"kaerimiru",vi:"nhìn lại, đoái hoài"},
      {jp:"委ねる",romaji:"yudaneru",vi:"phó thác"},
      {jp:"醸す",romaji:"kamosu",vi:"gây ra (không khí, men)"}
    ]},
    {title:"Trạng từ", items:[
      {jp:"おのずと",romaji:"onozu to",vi:"tự nhiên, tự khắc"},
      {jp:"殊に",romaji:"koto ni",vi:"đặc biệt là"},
      {jp:"一概に",romaji:"ichigai ni",vi:"vơ đũa cả nắm, nhất loạt"},
      {jp:"ことごとく",romaji:"kotogotoku",vi:"tất thảy"},
      {jp:"とりわけ",romaji:"toriwake",vi:"đặc biệt, nhất là"}
    ]}
  ],
  kanji: [
    {title:"Kanji N1 thường gặp", items:[
      {ch:"抑",mean:"kìm nén; ức",on:"ヨク",kun:"おさ.える",samples:["抑制（よくせい）"]},
      {ch:"制",mean:"chế; chế",on:"セイ",kun:"—",samples:["抑制（よくせい）"]},
      {ch:"措",mean:"đặt để; thố",on:"ソ",kun:"—",samples:["措置（そち）"]},
      {ch:"置",mean:"đặt; trí",on:"チ",kun:"お.く",samples:["措置（そち）"]},
      {ch:"享",mean:"hưởng; hưởng",on:"キョウ",kun:"—",samples:["享受（きょうじゅ）"]},
      {ch:"受",mean:"nhận; thụ",on:"ジュ",kun:"う.ける",samples:["享受（きょうじゅ）"]},
      {ch:"潜",mean:"ẩn, lặn; tiềm",on:"セン",kun:"ひそ.む",samples:["潜在（せんざい）"]},
      {ch:"顕",mean:"rõ; hiển",on:"ケン",kun:"—",samples:["顕在（けんざい）"]},
      {ch:"該",mean:"thuộc về; cai",on:"ガイ",kun:"—",samples:["該当（がいとう）"]},
      {ch:"趣",mean:"thú vị; thú",on:"シュ",kun:"おもむき",samples:["趣旨（しゅし）"]},
      {ch:"旨",mean:"ý chỉ; chỉ",on:"シ",kun:"むね",samples:["趣旨（しゅし）"]},
      {ch:"網",mean:"lưới; võng",on:"モウ",kun:"あみ",samples:["網羅（もうら）"]},
      {ch:"羅",mean:"giăng; la",on:"ラ",kun:"—",samples:["網羅（もうら）"]},
      {ch:"培",mean:"vun trồng; bồi",on:"バイ",kun:"つちか.う",samples:["栽培（さいばい）"]},
      {ch:"醸",mean:"ủ men; nhưỡng",on:"ジョウ",kun:"かも.す",samples:["醸成（じょうせい）"]},
      {ch:"阻",mean:"ngăn; trở",on:"ソ",kun:"はば.む",samples:["阻止（そし）"]}
    ]}
  ]
}

};

/* ---------------- GIAO TIẾP (KAIWA) ---------------- */
D.kaiwa = [
  {key:"jikoshoukai", title:"Tự giới thiệu", jp:"自己紹介",
   dialogs:[{title:"Lần đầu gặp mặt", lines:[
     {sp:"A",jp:"はじめまして。リンと申します。",romaji:"Hajimemashite. Rin to moushimasu.",vi:"Rất hân hạnh. Tôi tên là Linh."},
     {sp:"B",jp:"はじめまして。田中です。どうぞよろしく。",romaji:"Hajimemashite. Tanaka desu. Douzo yoroshiku.",vi:"Hân hạnh. Tôi là Tanaka. Mong được giúp đỡ."},
     {sp:"A",jp:"ベトナムから来ました。エンジニアです。",romaji:"Betonamu kara kimashita. Enjinia desu.",vi:"Tôi đến từ Việt Nam. Tôi là kỹ sư."},
     {sp:"B",jp:"そうですか。日本語が上手ですね。",romaji:"Sou desu ka. Nihongo ga jouzu desu ne.",vi:"Vậy à. Tiếng Nhật của bạn giỏi nhỉ."},
     {sp:"A",jp:"ありがとうございます。まだまだです。",romaji:"Arigatou gozaimasu. Madamada desu.",vi:"Cảm ơn ạ. Tôi còn kém lắm."}
   ]}],
   phrases:[
     {jp:"お名前は何ですか。",romaji:"Onamae wa nan desu ka.",vi:"Bạn tên là gì?"},
     {jp:"出身はどちらですか。",romaji:"Shusshin wa dochira desu ka.",vi:"Bạn quê ở đâu?"},
     {jp:"お仕事は何ですか。",romaji:"Oshigoto wa nan desu ka.",vi:"Bạn làm nghề gì?"},
     {jp:"趣味は何ですか。",romaji:"Shumi wa nan desu ka.",vi:"Sở thích của bạn là gì?"},
     {jp:"よろしくお願いします。",romaji:"Yoroshiku onegai shimasu.",vi:"Mong được giúp đỡ."}
   ]},

  {key:"restaurant", title:"Nhà hàng", jp:"レストラン",
   dialogs:[{title:"Gọi món", lines:[
     {sp:"Nhân viên",jp:"いらっしゃいませ。何名様ですか。",romaji:"Irasshaimase. Nanmei-sama desu ka.",vi:"Kính chào quý khách. Quý khách mấy người ạ?"},
     {sp:"Khách",jp:"二人です。",romaji:"Futari desu.",vi:"Hai người."},
     {sp:"Nhân viên",jp:"ご注文はお決まりですか。",romaji:"Gochuumon wa okimari desu ka.",vi:"Quý khách đã chọn món chưa ạ?"},
     {sp:"Khách",jp:"ラーメンを二つお願いします。",romaji:"Raamen o futatsu onegai shimasu.",vi:"Cho tôi hai bát ramen."},
     {sp:"Nhân viên",jp:"かしこまりました。少々お待ちください。",romaji:"Kashikomarimashita. Shoushou omachi kudasai.",vi:"Vâng ạ. Xin chờ một chút."}
   ]}],
   phrases:[
     {jp:"メニューを見せてください。",romaji:"Menyuu o misete kudasai.",vi:"Cho tôi xem thực đơn."},
     {jp:"おすすめは何ですか。",romaji:"Osusume wa nan desu ka.",vi:"Món nào quán gợi ý (ngon)?"},
     {jp:"これは何ですか。",romaji:"Kore wa nan desu ka.",vi:"Đây là món gì?"},
     {jp:"お会計をお願いします。",romaji:"Okaikei o onegai shimasu.",vi:"Cho tôi thanh toán."},
     {jp:"とてもおいしかったです。",romaji:"Totemo oishikatta desu.",vi:"Rất ngon ạ."}
   ]},

  {key:"shopping", title:"Mua sắm", jp:"買い物",
   dialogs:[{title:"Tại cửa hàng quần áo", lines:[
     {sp:"Nhân viên",jp:"いらっしゃいませ。何かお探しですか。",romaji:"Irasshaimase. Nanika osagashi desu ka.",vi:"Kính chào. Quý khách tìm gì ạ?"},
     {sp:"Khách",jp:"このシャツの色違いはありますか。",romaji:"Kono shatsu no irochigai wa arimasu ka.",vi:"Áo này có màu khác không?"},
     {sp:"Nhân viên",jp:"青と白がございます。",romaji:"Ao to shiro ga gozaimasu.",vi:"Có màu xanh và trắng ạ."},
     {sp:"Khách",jp:"試着してもいいですか。",romaji:"Shichaku shitemo ii desu ka.",vi:"Tôi mặc thử được không?"},
     {sp:"Nhân viên",jp:"はい、こちらへどうぞ。",romaji:"Hai, kochira e douzo.",vi:"Vâng, mời quý khách bên này."}
   ]}],
   phrases:[
     {jp:"いくらですか。",romaji:"Ikura desu ka.",vi:"Bao nhiêu tiền?"},
     {jp:"もう少し安くなりませんか。",romaji:"Mou sukoshi yasuku narimasen ka.",vi:"Có bớt chút được không?"},
     {jp:"カードで払えますか。",romaji:"Kaado de haraemasu ka.",vi:"Trả bằng thẻ được không?"},
     {jp:"これをください。",romaji:"Kore o kudasai.",vi:"Cho tôi cái này."},
     {jp:"袋をください。",romaji:"Fukuro o kudasai.",vi:"Cho tôi cái túi."}
   ]},

  {key:"direction", title:"Hỏi đường", jp:"道案内",
   dialogs:[{title:"Hỏi đường đến nhà ga", lines:[
     {sp:"A",jp:"すみません、駅はどこですか。",romaji:"Sumimasen, eki wa doko desu ka.",vi:"Xin lỗi, nhà ga ở đâu ạ?"},
     {sp:"B",jp:"まっすぐ行って、二つ目の信号を右に曲がってください。",romaji:"Massugu itte, futatsume no shingou o migi ni magatte kudasai.",vi:"Đi thẳng, rẽ phải ở đèn giao thông thứ hai."},
     {sp:"A",jp:"ここから遠いですか。",romaji:"Koko kara tooi desu ka.",vi:"Từ đây có xa không?"},
     {sp:"B",jp:"いいえ、歩いて五分ぐらいです。",romaji:"Iie, aruite gofun gurai desu.",vi:"Không, đi bộ khoảng 5 phút."},
     {sp:"A",jp:"ありがとうございます。",romaji:"Arigatou gozaimasu.",vi:"Cảm ơn ạ."}
   ]}],
   phrases:[
     {jp:"道に迷いました。",romaji:"Michi ni mayoimashita.",vi:"Tôi bị lạc đường."},
     {jp:"この電車は東京に行きますか。",romaji:"Kono densha wa Toukyou ni ikimasu ka.",vi:"Tàu này có đi Tokyo không?"},
     {jp:"切符はどこで買えますか。",romaji:"Kippu wa doko de kaemasu ka.",vi:"Mua vé ở đâu ạ?"},
     {jp:"次の駅で降ります。",romaji:"Tsugi no eki de orimasu.",vi:"Tôi xuống ở ga tiếp theo."},
     {jp:"タクシーを呼んでください。",romaji:"Takushii o yonde kudasai.",vi:"Gọi taxi giúp tôi."}
   ]},

  {key:"hospital", title:"Bệnh viện", jp:"病院",
   dialogs:[{title:"Khám bệnh", lines:[
     {sp:"Bác sĩ",jp:"どうしましたか。",romaji:"Dou shimashita ka.",vi:"Bạn bị làm sao vậy?"},
     {sp:"Bệnh nhân",jp:"朝から頭が痛いんです。",romaji:"Asa kara atama ga itai n desu.",vi:"Từ sáng tôi bị đau đầu."},
     {sp:"Bác sĩ",jp:"熱はありますか。",romaji:"Netsu wa arimasu ka.",vi:"Có sốt không?"},
     {sp:"Bệnh nhân",jp:"三十八度あります。",romaji:"Sanjuuhachi-do arimasu.",vi:"Có, 38 độ."},
     {sp:"Bác sĩ",jp:"では、薬を出します。お大事に。",romaji:"Dewa, kusuri o dashimasu. Odaiji ni.",vi:"Vậy tôi kê thuốc. Giữ gìn sức khỏe nhé."}
   ]}],
   phrases:[
     {jp:"気分が悪いです。",romaji:"Kibun ga warui desu.",vi:"Tôi thấy khó chịu."},
     {jp:"お腹が痛いです。",romaji:"Onaka ga itai desu.",vi:"Tôi bị đau bụng."},
     {jp:"保険証を持っています。",romaji:"Hokenshou o motteimasu.",vi:"Tôi có thẻ bảo hiểm."},
     {jp:"薬を飲んでください。",romaji:"Kusuri o nonde kudasai.",vi:"Hãy uống thuốc."},
     {jp:"救急車を呼んでください。",romaji:"Kyuukyuusha o yonde kudasai.",vi:"Gọi xe cấp cứu giúp tôi."}
   ]},

  {key:"phone", title:"Điện thoại", jp:"電話",
   dialogs:[{title:"Gọi điện cho người quen", lines:[
     {sp:"A",jp:"もしもし、田中さんのお宅ですか。",romaji:"Moshimoshi, Tanaka-san no otaku desu ka.",vi:"A lô, đây có phải nhà anh Tanaka không ạ?"},
     {sp:"B",jp:"はい、そうです。",romaji:"Hai, sou desu.",vi:"Vâng, đúng rồi ạ."},
     {sp:"A",jp:"リンと申しますが、田中さんはいらっしゃいますか。",romaji:"Rin to moushimasu ga, Tanaka-san wa irasshaimasu ka.",vi:"Tôi là Linh, anh Tanaka có nhà không ạ?"},
     {sp:"B",jp:"少々お待ちください。",romaji:"Shoushou omachi kudasai.",vi:"Xin chờ một chút ạ."}
   ]}],
   phrases:[
     {jp:"伝言をお願いできますか。",romaji:"Dengon o onegai dekimasu ka.",vi:"Tôi nhờ nhắn lại được không?"},
     {jp:"また後でかけ直します。",romaji:"Mata ato de kakenaoshimasu.",vi:"Tôi sẽ gọi lại sau."},
     {jp:"電話番号を教えてください。",romaji:"Denwa bangou o oshiete kudasai.",vi:"Cho tôi xin số điện thoại."},
     {jp:"声が遠いです。",romaji:"Koe ga tooi desu.",vi:"Tôi nghe không rõ."},
     {jp:"失礼します。",romaji:"Shitsurei shimasu.",vi:"Tôi xin phép (cúp máy)."}
   ]},

  {key:"interview", title:"Phỏng vấn xin việc", jp:"面接",
   dialogs:[{title:"Buổi phỏng vấn", lines:[
     {sp:"Người PV",jp:"自己紹介をお願いします。",romaji:"Jikoshoukai o onegai shimasu.",vi:"Mời bạn tự giới thiệu."},
     {sp:"Ứng viên",jp:"リンと申します。三年間IT会社で働きました。",romaji:"Rin to moushimasu. Sannenkan IT-gaisha de hatarakimashita.",vi:"Tôi tên Linh. Tôi đã làm 3 năm ở công ty IT."},
     {sp:"Người PV",jp:"なぜ当社を志望しましたか。",romaji:"Naze tousha o shibou shimashita ka.",vi:"Tại sao bạn ứng tuyển công ty chúng tôi?"},
     {sp:"Ứng viên",jp:"御社の技術力に魅力を感じたからです。",romaji:"Onsha no gijutsuryoku ni miryoku o kanjita kara desu.",vi:"Vì tôi thấy năng lực kỹ thuật của quý công ty rất hấp dẫn."}
   ]}],
   phrases:[
     {jp:"よろしくお願いいたします。",romaji:"Yoroshiku onegai itashimasu.",vi:"Rất mong được giúp đỡ (trang trọng)."},
     {jp:"長所は責任感が強いことです。",romaji:"Chousho wa sekininkan ga tsuyoi koto desu.",vi:"Điểm mạnh của tôi là tinh thần trách nhiệm cao."},
     {jp:"御社で成長したいです。",romaji:"Onsha de seichou shitai desu.",vi:"Tôi muốn phát triển ở quý công ty."},
     {jp:"何か質問はありますか。",romaji:"Nanika shitsumon wa arimasu ka.",vi:"Bạn có câu hỏi gì không?"},
     {jp:"本日はありがとうございました。",romaji:"Honjitsu wa arigatou gozaimashita.",vi:"Cảm ơn vì hôm nay ạ."}
   ]},

  {key:"business", title:"Công sở (Kính ngữ)", jp:"ビジネス敬語",
   dialogs:[{title:"Trao đổi với cấp trên", lines:[
     {sp:"Cấp dưới",jp:"お疲れ様です。資料を確認していただけますか。",romaji:"Otsukaresama desu. Shiryou o kakunin shite itadakemasu ka.",vi:"Anh đã vất vả. Anh kiểm tra giúp tài liệu được không ạ?"},
     {sp:"Cấp trên",jp:"わかりました。後で見ておきます。",romaji:"Wakarimashita. Ato de mite okimasu.",vi:"Được rồi. Tôi sẽ xem sau."},
     {sp:"Cấp dưới",jp:"お忙しいところ申し訳ありません。",romaji:"Oisogashii tokoro moushiwake arimasen.",vi:"Xin lỗi đã làm phiền lúc anh bận."}
   ]}],
   phrases:[
     {jp:"お世話になっております。",romaji:"Osewa ni natte orimasu.",vi:"Cảm ơn anh/chị đã luôn quan tâm giúp đỡ."},
     {jp:"かしこまりました。",romaji:"Kashikomarimashita.",vi:"Vâng, tôi hiểu rồi ạ."},
     {jp:"少々お待ちいただけますか。",romaji:"Shoushou omachi itadakemasu ka.",vi:"Anh/chị chờ một chút được không ạ?"},
     {jp:"申し訳ございません。",romaji:"Moushiwake gozaimasen.",vi:"Tôi vô cùng xin lỗi."},
     {jp:"承知いたしました。",romaji:"Shouchi itashimashita.",vi:"Tôi đã rõ ạ (trang trọng)."}
   ]}
];

/* ---------------- TỪ VỰNG CHUYÊN NGÀNH ---------------- */
D.industry = [
  {key:"it", icon:"💻", title:"IT / CNTT", jp:"IT・情報技術",
   groups:[
     {title:"Lập trình cơ bản", items:[
       {jp:"プログラム",romaji:"puroguramu",vi:"chương trình"},
       {jp:"開発",romaji:"kaihatsu",vi:"phát triển"},
       {jp:"設計",romaji:"sekkei",vi:"thiết kế"},
       {jp:"コード",romaji:"koodo",vi:"mã nguồn (code)"},
       {jp:"バグ",romaji:"bagu",vi:"lỗi (bug)"},
       {jp:"修正",romaji:"shuusei",vi:"sửa lỗi, chỉnh sửa"},
       {jp:"関数",romaji:"kansuu",vi:"hàm"},
       {jp:"変数",romaji:"hensuu",vi:"biến"},
       {jp:"配列",romaji:"hairetsu",vi:"mảng"},
       {jp:"引数",romaji:"hikisuu",vi:"tham số"},
       {jp:"戻り値",romaji:"modorichi",vi:"giá trị trả về"},
       {jp:"ライブラリ",romaji:"raiburari",vi:"thư viện"}
     ]},
     {title:"Hệ thống & mạng", items:[
       {jp:"サーバー",romaji:"saabaa",vi:"máy chủ"},
       {jp:"データベース",romaji:"deetabeesu",vi:"cơ sở dữ liệu"},
       {jp:"ネットワーク",romaji:"nettowaaku",vi:"mạng"},
       {jp:"通信",romaji:"tsuushin",vi:"truyền thông, giao tiếp"},
       {jp:"暗号化",romaji:"angouka",vi:"mã hóa"},
       {jp:"認証",romaji:"ninshou",vi:"xác thực"},
       {jp:"障害",romaji:"shougai",vi:"sự cố"},
       {jp:"復旧",romaji:"fukkyuu",vi:"khôi phục"},
       {jp:"容量",romaji:"youryou",vi:"dung lượng"},
       {jp:"仮想化",romaji:"kasouka",vi:"ảo hóa"}
     ]},
     {title:"Quản lý dự án", items:[
       {jp:"仕様",romaji:"shiyou",vi:"đặc tả (spec)"},
       {jp:"要件",romaji:"youken",vi:"yêu cầu"},
       {jp:"納期",romaji:"nouki",vi:"hạn giao hàng"},
       {jp:"工程",romaji:"koutei",vi:"công đoạn, quy trình"},
       {jp:"進捗",romaji:"shinchoku",vi:"tiến độ"},
       {jp:"検証",romaji:"kenshou",vi:"kiểm chứng"},
       {jp:"運用",romaji:"un'you",vi:"vận hành"},
       {jp:"保守",romaji:"hoshu",vi:"bảo trì"},
       {jp:"打ち合わせ",romaji:"uchiawase",vi:"buổi họp, trao đổi"}
     ]}
   ]},

  {key:"nursing", icon:"🏥", title:"Điều dưỡng / Y tế", jp:"介護・医療",
   groups:[
     {title:"Cơ thể & triệu chứng", items:[
       {jp:"患者",romaji:"kanja",vi:"bệnh nhân"},
       {jp:"症状",romaji:"shoujou",vi:"triệu chứng"},
       {jp:"血圧",romaji:"ketsuatsu",vi:"huyết áp"},
       {jp:"体温",romaji:"taion",vi:"thân nhiệt"},
       {jp:"脈拍",romaji:"myakuhaku",vi:"mạch đập"},
       {jp:"痛み",romaji:"itami",vi:"cơn đau"},
       {jp:"発熱",romaji:"hatsunetsu",vi:"sốt"},
       {jp:"点滴",romaji:"tenteki",vi:"truyền dịch"}
     ]},
     {title:"Chăm sóc", items:[
       {jp:"介護",romaji:"kaigo",vi:"điều dưỡng, chăm sóc"},
       {jp:"看護",romaji:"kango",vi:"y tá, điều dưỡng (y tế)"},
       {jp:"入浴",romaji:"nyuuyoku",vi:"tắm"},
       {jp:"食事",romaji:"shokuji",vi:"bữa ăn"},
       {jp:"排泄",romaji:"haisetsu",vi:"bài tiết"},
       {jp:"着替え",romaji:"kigae",vi:"thay quần áo"},
       {jp:"車椅子",romaji:"kurumaisu",vi:"xe lăn"},
       {jp:"服薬",romaji:"fukuyaku",vi:"uống thuốc"},
       {jp:"見守り",romaji:"mimamori",vi:"trông coi, theo dõi"},
       {jp:"介助",romaji:"kaijo",vi:"hỗ trợ, giúp đỡ"}
     ]},
     {title:"Cơ sở & hành chính", items:[
       {jp:"病棟",romaji:"byoutou",vi:"khu điều trị"},
       {jp:"診察",romaji:"shinsatsu",vi:"khám bệnh"},
       {jp:"処方",romaji:"shohou",vi:"kê đơn"},
       {jp:"注射",romaji:"chuusha",vi:"tiêm"},
       {jp:"手術",romaji:"shujutsu",vi:"phẫu thuật"},
       {jp:"入院",romaji:"nyuuin",vi:"nhập viện"},
       {jp:"退院",romaji:"taiin",vi:"xuất viện"},
       {jp:"介護施設",romaji:"kaigo shisetsu",vi:"cơ sở điều dưỡng"}
     ]}
   ]},

  {key:"service", icon:"🍱", title:"Nhà hàng / Khách sạn", jp:"飲食・接客",
   groups:[
     {title:"Phục vụ khách", items:[
       {jp:"接客",romaji:"sekkyaku",vi:"tiếp khách"},
       {jp:"注文",romaji:"chuumon",vi:"gọi món"},
       {jp:"会計",romaji:"kaikei",vi:"thanh toán"},
       {jp:"予約",romaji:"yoyaku",vi:"đặt chỗ"},
       {jp:"満席",romaji:"manseki",vi:"hết chỗ"},
       {jp:"案内",romaji:"annai",vi:"dẫn chỗ, hướng dẫn"},
       {jp:"配膳",romaji:"haizen",vi:"bưng món ra"},
       {jp:"片付け",romaji:"katazuke",vi:"dọn dẹp"}
     ]},
     {title:"Trong bếp", items:[
       {jp:"厨房",romaji:"chuubou",vi:"nhà bếp"},
       {jp:"調理",romaji:"chouri",vi:"nấu nướng"},
       {jp:"仕込み",romaji:"shikomi",vi:"sơ chế chuẩn bị"},
       {jp:"盛り付け",romaji:"moritsuke",vi:"trình bày món"},
       {jp:"食材",romaji:"shokuzai",vi:"nguyên liệu"},
       {jp:"在庫",romaji:"zaiko",vi:"hàng tồn kho"},
       {jp:"衛生",romaji:"eisei",vi:"vệ sinh"},
       {jp:"仕入れ",romaji:"shiire",vi:"nhập hàng"}
     ]},
     {title:"Khách sạn", items:[
       {jp:"宿泊",romaji:"shukuhaku",vi:"lưu trú"},
       {jp:"フロント",romaji:"furonto",vi:"quầy lễ tân"},
       {jp:"客室",romaji:"kyakushitsu",vi:"phòng khách"},
       {jp:"清掃",romaji:"seisou",vi:"dọn phòng, vệ sinh"},
       {jp:"チェックイン",romaji:"chekkuin",vi:"nhận phòng"},
       {jp:"チェックアウト",romaji:"chekkuauto",vi:"trả phòng"},
       {jp:"接遇",romaji:"setsuguu",vi:"tiếp đãi"}
     ]}
   ]},

  {key:"office", icon:"💼", title:"Kinh doanh / Văn phòng", jp:"ビジネス・事務",
   groups:[
     {title:"Báo cáo - Liên lạc - Bàn bạc (報連相)", items:[
       {jp:"会議",romaji:"kaigi",vi:"cuộc họp"},
       {jp:"資料",romaji:"shiryou",vi:"tài liệu"},
       {jp:"報告",romaji:"houkoku",vi:"báo cáo"},
       {jp:"連絡",romaji:"renraku",vi:"liên lạc"},
       {jp:"相談",romaji:"soudan",vi:"trao đổi, bàn bạc"},
       {jp:"議事録",romaji:"gijiroku",vi:"biên bản họp"},
       {jp:"名刺",romaji:"meishi",vi:"danh thiếp"},
       {jp:"締め切り",romaji:"shimekiri",vi:"hạn chót"}
     ]},
     {title:"Giao dịch & tài chính", items:[
       {jp:"取引先",romaji:"torihikisaki",vi:"đối tác (giao dịch)"},
       {jp:"見積もり",romaji:"mitsumori",vi:"báo giá"},
       {jp:"契約",romaji:"keiyaku",vi:"hợp đồng"},
       {jp:"請求書",romaji:"seikyuusho",vi:"hóa đơn yêu cầu thanh toán"},
       {jp:"領収書",romaji:"ryoushuusho",vi:"biên lai"},
       {jp:"売上",romaji:"uriage",vi:"doanh thu"},
       {jp:"利益",romaji:"rieki",vi:"lợi nhuận"},
       {jp:"予算",romaji:"yosan",vi:"ngân sách"},
       {jp:"経費",romaji:"keihi",vi:"chi phí"}
     ]},
     {title:"Chế độ làm việc", items:[
       {jp:"残業",romaji:"zangyou",vi:"làm thêm giờ"},
       {jp:"出張",romaji:"shucchou",vi:"đi công tác"},
       {jp:"在宅勤務",romaji:"zaitaku kinmu",vi:"làm việc tại nhà"},
       {jp:"有給休暇",romaji:"yuukyuu kyuuka",vi:"nghỉ phép có lương"}
     ]}
   ]},

  {key:"construction", icon:"🏗️", title:"Xây dựng / Cơ khí", jp:"建設・製造",
   groups:[
     {title:"Công trường", items:[
       {jp:"工事",romaji:"kouji",vi:"thi công"},
       {jp:"現場",romaji:"genba",vi:"công trường, hiện trường"},
       {jp:"設計図",romaji:"sekkeizu",vi:"bản vẽ thiết kế"},
       {jp:"図面",romaji:"zumen",vi:"bản vẽ"},
       {jp:"作業",romaji:"sagyou",vi:"công việc, thao tác"},
       {jp:"鉄筋",romaji:"tekkin",vi:"cốt thép"},
       {jp:"足場",romaji:"ashiba",vi:"giàn giáo"}
     ]},
     {title:"Dụng cụ & an toàn", items:[
       {jp:"工具",romaji:"kougu",vi:"dụng cụ"},
       {jp:"機械",romaji:"kikai",vi:"máy móc"},
       {jp:"部品",romaji:"buhin",vi:"linh kiện"},
       {jp:"安全",romaji:"anzen",vi:"an toàn"},
       {jp:"ヘルメット",romaji:"herumetto",vi:"mũ bảo hộ"},
       {jp:"安全靴",romaji:"anzengutsu",vi:"giày bảo hộ"}
     ]},
     {title:"Sản xuất & kiểm tra", items:[
       {jp:"製造",romaji:"seizou",vi:"chế tạo"},
       {jp:"加工",romaji:"kakou",vi:"gia công"},
       {jp:"溶接",romaji:"yousetsu",vi:"hàn"},
       {jp:"組立",romaji:"kumitate",vi:"lắp ráp"},
       {jp:"点検",romaji:"tenken",vi:"kiểm tra (định kỳ)"},
       {jp:"整備",romaji:"seibi",vi:"bảo dưỡng"},
       {jp:"検査",romaji:"kensa",vi:"kiểm tra chất lượng"},
       {jp:"不良品",romaji:"furyouhin",vi:"hàng lỗi"}
     ]}
   ]},

  {key:"beauty", icon:"💇", title:"Làm đẹp / Thẩm mỹ", jp:"美容",
   groups:[
     {title:"Tóc", items:[
       {jp:"美容師",romaji:"biyoushi",vi:"thợ làm tóc"},
       {jp:"カット",romaji:"katto",vi:"cắt tóc"},
       {jp:"カラー",romaji:"karaa",vi:"nhuộm màu"},
       {jp:"パーマ",romaji:"paama",vi:"uốn tóc"},
       {jp:"シャンプー",romaji:"shanpuu",vi:"gội đầu"},
       {jp:"髪型",romaji:"kamigata",vi:"kiểu tóc"},
       {jp:"前髪",romaji:"maegami",vi:"tóc mái"},
       {jp:"仕上げ",romaji:"shiage",vi:"hoàn thiện"}
     ]},
     {title:"Da & trang điểm", items:[
       {jp:"お肌",romaji:"ohada",vi:"làn da"},
       {jp:"化粧",romaji:"keshou",vi:"trang điểm"},
       {jp:"化粧品",romaji:"keshouhin",vi:"mỹ phẩm"},
       {jp:"まつげ",romaji:"matsuge",vi:"lông mi"},
       {jp:"ネイル",romaji:"neiru",vi:"làm móng"},
       {jp:"エステ",romaji:"esute",vi:"thẩm mỹ, spa"},
       {jp:"施術",romaji:"sejutsu",vi:"liệu trình, thực hiện"}
     ]},
     {title:"Tiếp khách", items:[
       {jp:"予約",romaji:"yoyaku",vi:"đặt lịch"},
       {jp:"接客",romaji:"sekkyaku",vi:"tiếp khách"},
       {jp:"指名",romaji:"shimei",vi:"chỉ định (thợ)"},
       {jp:"カウンセリング",romaji:"kaunseringu",vi:"tư vấn"}
     ]}
   ]}
];

})();
