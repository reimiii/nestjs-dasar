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

dependency injection objeck membutuhkan object lain, controller butuh service misal nya.
ini buat nya pake constructor di controller... klo misal nya mau unit test datapi butuh servicenya di before each nya masukin provider service nya yang mau di pake atau di inject nya

nest jg mendukung property base injection

membuat custom provider... sebelum nya pake standar provider...

class provider misal bikin connection provider tapi ada 2 class dan suatu saat penengn pake salah satu nya tampa nge ganti code nya...

generate nya pake `nest generate provider connection user`

value provider adalah membuat dependency dari value (object) yang sudah ada, misal punya sebuah object dan object tersebut mau di jadikan sebagai dependency provider, kita bisa gunakan value provider

generate nya pake `nest g s mail user` misal aja kita pake library dan ga bisa pake @Injectable()


factory provider membuat dependency dengan menyediakan function yang akan di panggil untuk membuat object dependency nya biasa di sebut factory method, jika pada factory method tersebut buth dependency lain kita bisa sebutkan juga dengan menggunakan attribute inject. parameter yang di butuhin di factory method nya...

alias provider membuat dependency dengan nama yang berbeda untuk object provider yang sama
cocok untuk dependency yang sama untuk nama provider yang berbeda beda untuk nama
alias yang berbeda dengan class bisa pake @Inject(nameAlias) kalo butuh ngelakuin
dep injection


module reference in nest ModuleRef, bisa di gunakan untk ngambil data provider yang 
ada di aplikasi bisa bantu pada kasus ga mau DI otomatis misal, mau ngambil dependency 
tapi pas lagi butuh aja lazy. perlu ngecek manual ada apa engga jadi hati hati..

**configuration** seperti value yang dinamis di .env untuk pake fitur configuration
perlu install library `@nestjs/config` dan perlu regis ConfigModule ke AppModule
dan seluruh config .env bisa di baca pake class ConfigService, 
bisa juga di pake di NestAplication misal nya mau dinamik port...


**shared module** module singleton object, kita bisa melakukan import module pake
attribute import di module.. kita udh melakukan shared module dengan import UserModule di AppModule

**shared provider** secara default provider ga di ekspose ke luar dari module nya
misal provider d module A ga bisa di pake di module B, kalo mau mau di shanring harus
di export di @Module({ export: []) A nya baru bisa di pake di module B atau lainnya
hanya yang di export saja yang bisa...

**Database** pake prisma... `npm install -D prisma` dan `npx prisma init`

bikin module nya buat prisma `nest g mo prisma` abis itu `nest g s prisma prisma`

logger pake winstone skip aja dulu... keknya...

**dynamic module** bikin dynamic module buat validation service

**middleware** sama kayak di express klo mau buat manual pake NestMiddleware 
tinggal di exstend aja di class nya atau `nest generate middleware log path`
registrasi kan middleware harus membuat module turunan dari interface nest module

**exception filter** mengubah default pesan error json response bisa di generate jg
`nest generate filter validation` dan sama kayak middleware harus di registrasikan dulu baru bisa jalan
nest jg punya http exception biar hga usah buat filter exception