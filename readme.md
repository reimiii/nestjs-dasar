catetan buat nest...

decorator sama aja kayak annotation di java

nest is modular module utama akan melakukan import modul modul lainnya module utama (Application Module)

generate module using `nest generate module NAME path`

Controller declarative menggunakan Annotation/decorator

buat controller `nest generate controller name path`

routing di controller pake decorator di method nya..

request default using express js if want using express.Request harus pake @Req() untuk pake object Request dari Express

rekomendasi nya langsung nyebutin data yang di butuhkan di param menggunakan decorator yang di sediakan nest js

always using request decorator from nestjs
tapi ada yang perlu di pertanyakan kira kira? si nest ini nerima data nya default nya apa ya? bisa conversi otomatis atau harus bikin sendiri hmmmm

response jg bisa pake express.Response pake @Req() kek biasanya tapi ga di return

ternyata gagal ga bisa salah... blunder harus nya pake annotation  @Res() buat object Response tapi malah pake @Req() ya ga jalan lah wkwkw...

unit test pake jest di satuin di folder pas bikin controller otomatis terbuat

ada kurang nya pake unittest tapi yang di test pake parameter @Req() atau @Req()
pake `node-mock-http` untuk unit test nya

e2e test integration test, using `supertest` baik lah

provider = service, repository, helper di buat dalam bentuk provider di nest
ide utamanya katanya supaya object provider bisa di inject sebagai dependency ke object lainnya seperti controller atau provider lain jadi nya ya ini dep injection

membuat provide buat class dengan decorator @Injectable() semua provider harus di regis
ke module agar di buat otomatis `nest generate provider name path` klo misal nya mau buat service bisa langsung kayak gini `nest generate service name path`
