# ArmSungMa — คอร์ส "สร้างเว็บ" (Landing Page)

โปรเจกต์นี้เป็น Next.js + Tailwind (พร้อมรัน) สำหรับหน้า Landing Page ขายคอร์ส/เก็บลีด

## Run (เครื่องคุณ)
1) ติดตั้ง Node.js 18+  
2) แตกไฟล์ zip
3) เปิด terminal ในโฟลเดอร์โปรเจกต์ แล้วรัน:

```bash
npm install
npm run dev
```

แล้วเปิด: http://localhost:3000

## ใส่ข้อมูลจริงทีหลัง
- แก้ชื่อ/ราคา/ลิงก์ LINE/WhatsApp ได้ที่: `app/page.tsx`
- แก้ SEO title/description ได้ที่: `app/layout.tsx`

## Deploy
- Vercel, Cloudflare Pages, Railway, หรือ VPS ก็ได้ (ขึ้นกับที่คุณใช้)
