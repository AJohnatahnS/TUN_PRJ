# ผลตรวจเดโม

ตรวจ 3 พฤศจิกายน 2569

- `node --check DEMO/app.js` และ `node --check DEMO/server.cjs` ผ่าน
- HTTP หน้าแรก, JS, CSS และเอกสาร requirements/architecture/delivery-plan ตอบ 200
- ทดลองในเบราว์เซอร์: สร้างงาน → ส่งตรวจ → เปลี่ยนบทบาทผู้ตรวจ → พยายามอนุมัติโดย checklist ไม่ครบ (ถูกปฏิเสธ) → checklist ครบและคะแนน 4 (อนุมัติได้) → เสนอความรู้ (pending) → อนุมัติความรู้ (approved)
- Dashboard เปลี่ยนจำนวนงาน งานที่อนุมัติ ความรู้ และคะแนนเฉลี่ยตามข้อมูลที่ทดลอง
- ตรวจภาพ desktop และ mobile viewport 375px; DOM รายงาน scrollWidth 360 ไม่เกิน viewport 375px
- รีเซ็ตสถานะหลังตรวจเพื่อพร้อมทดลองใหม่; ภาพหน้าแรกอยู่ที่ preview.png

ข้อจำกัดการตรวจ: ยังไม่ได้ทดสอบ return/resubmit ในเบราว์เซอร์, keyboard ทุกจุด, ทุก breakpoint หรือ browser อื่น ไม่มี backend/security ที่จะรับรอง และไม่มี AI จริงให้ประเมินคุณภาพคำตอบ ไม่ติดตั้ง dependency และไม่มีการ commit/push
