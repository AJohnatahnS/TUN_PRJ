# KooKid — TUN Project

Interactive software demo และเอกสารออกแบบระบบ KooKid สำหรับสำนักงานบัญชี

- [เริ่มต้นและคู่มือเดโม](DEMO/README.md)
- [Software requirements](DEMO/docs/requirements.md)
- [Architecture และ Tech Stack](DEMO/docs/architecture.md)
- [แผนพัฒนาและการประเมิน](DEMO/docs/delivery-plan.md)

## เปิดในเครื่อง

```sh
node DEMO/server.cjs
```

เปิด http://127.0.0.1:4173 หรือเปิด DEMO/index.html โดยตรง ไม่ต้องติดตั้ง dependency

## Vercel

Import repository นี้ เลือก root directory เป็นราก repository ใช้ Other framework และ vercel.json ที่กำหนด outputDirectory เป็น DEMO ไม่มี install/build step

เดโมใช้ข้อมูลสังเคราะห์และแม่แบบ AI จำลอง สถานะอยู่ใน memory ยังไม่มี backend, login หรือการแยกข้อมูลจริง เอกสารข้อเสนอเดิมไม่รวมใน repository เนื่องจากมีข้อมูลส่วนบุคคล
