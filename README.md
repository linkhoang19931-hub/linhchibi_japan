# 🌸 Hành Trình Tiếng Nhật (A → N1)

Web tự học tiếng Nhật cho người Việt — từ bảng chữ cái đến trình độ **JLPT N1**.
Có **phân tab theo trình độ**, **hội thoại giao tiếp (kaiwa)**, **từ vựng chuyên ngành**,
kèm **phát âm**, **flashcard**, **trắc nghiệm** và **lưu tiến độ**.

## ✨ Tính năng
- **Hiragana / Katakana**: bảng đầy đủ (cơ bản + biến âm + âm ghép), bấm để **nghe phát âm**, ẩn romaji để tự kiểm tra.
- **Trình độ N5 → N1**: chọn cấp độ JLPT, mỗi cấp có tab con **Ngữ pháp / Từ vựng / Kanji** riêng (có công thức, ví dụ, âm Hán-Việt). N5 giữ nguyên 15 mẫu ngữ pháp, 190 từ, 98 kanji.
- **Giao tiếp (Kaiwa)**: 8 chủ đề tình huống (tự giới thiệu, nhà hàng, mua sắm, hỏi đường, bệnh viện, điện thoại, phỏng vấn, kính ngữ công sở) — hội thoại mẫu + câu hữu ích, bấm nghe.
- **Chuyên ngành**: từ vựng theo ngành — **IT/CNTT, Điều dưỡng/Y tế, Nhà hàng/Khách sạn, Kinh doanh/Văn phòng, Xây dựng/Cơ khí, Làm đẹp**.
- **Từ vựng** có **tìm kiếm** (theo nghĩa / romaji / chữ Nhật) trong từng cấp độ.
- **Flashcard**: chọn được **bộ thẻ** (N5–N1 hoặc theo ngành), thẻ lật.
- **Trắc nghiệm**: đố kana + đố ngữ pháp N5, chấm điểm và lưu điểm cao nhất.
- **Lưu tiến độ** tự động trong trình duyệt (localStorage).

> Phát âm dùng giọng đọc tiếng Nhật sẵn có của trình duyệt (Web Speech API).
> Chrome/Edge trên máy tính thường có sẵn giọng `ja-JP`. Nếu không nghe được,
> hãy cài gói giọng tiếng Nhật trong cài đặt hệ điều hành.

## 📁 Cấu trúc
```
index.html          # trang chính
assets/style.css    # giao diện (kawaii)
assets/app.js       # logic: router, phát âm, flashcard, quiz, tiến độ
assets/data.js      # nội dung N5 nền tảng (kana, từ vựng, kanji, ngữ pháp, quiz, chào hỏi)
assets/data-plus.js # mở rộng: trình độ N4→N1, kaiwa, từ vựng chuyên ngành
```
Hoàn toàn **tĩnh** — không cần cài đặt, không cần server, không cần build.

## 🚀 Đưa lên GitHub Pages
1. Tạo một repo mới trên GitHub (ví dụ `hoc-tieng-nhat`).
2. Tải toàn bộ thư mục này lên repo (kéo-thả file trên web GitHub cũng được).
3. Vào **Settings → Pages**.
4. Mục **Source** chọn **Deploy from a branch**, chọn branch `main` và thư mục `/ (root)`, bấm **Save**.
5. Đợi ~1 phút, web sẽ chạy tại: `https://<tên-github>.github.io/<tên-repo>/`

> Mẹo: muốn web chạy tại `https://<tên-github>.github.io/` (không có đuôi repo),
> hãy đặt tên repo là `<tên-github>.github.io`.

## 🛠️ Tự thêm/sửa nội dung
Mọi nội dung nằm trong `assets/data.js` (một object `window.DATA`). Cấu trúc:
- `DATA.vocab`: danh sách nhóm `{title, items:[{jp, romaji, vi}]}`
- `DATA.kanji`: danh sách nhóm `{title, items:[{ch, mean, on, kun, samples:[...]}]}`
- `DATA.grammar`: `[{chip, accent, title, formula, points:[...], examples:[{jp,romaji,vi}]}]`
- `DATA.kana`, `DATA.greet`, `DATA.quiz`

Thêm từ mới chỉ cần chèn vào mảng tương ứng rồi tải lại trang.

## 🧪 Chạy thử trên máy
Mở trực tiếp `index.html` bằng trình duyệt là được. (Hoặc chạy server tĩnh:
`python3 -m http.server` rồi mở `http://localhost:8000`.)

---
Made with 🍙 for Vietnamese learners.
