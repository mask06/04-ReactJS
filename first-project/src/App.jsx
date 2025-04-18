/* eslint-disable react/no-unescaped-entities */
import React from "react"
import "./deneme.css"

import CardList from "./components/CardList";
import { employee, birthdate, pictures } from "./data";
function App() {

  return (
    <React.Fragment>
      <img width={300} src={pictures.picture01} alt="" />
      <img width={300} src={pictures.picture02} alt="" />
      <h3>Hello React JS!</h3>
      <h3>JSX Özellikleri</h3>
      <ul>
        <li> JSX yapıları html kodları değildir. Anlaşılır ve hızlı bir yazım sağlaması açısından oluşturulmuş htmk benzeri yapılar kullanmamızı sağlar.</li>
        <li>
          JSX yapıları mutlaka tek bir kapsayıcıya ihtiyaç duyar!
        </li>
        <li>
          Kapsayıcı olarak kullanılan yapı eğer css özelliği verilmemişse performansı düşürmemesi için boş fragment(<></>) veya react.fragment yapıları tercih edilmelidir.
        </li>
        <li>JSX yapısı içerisinde bir JS kodu çalıştırılmak istenirse süslü parantezler içerisinde yazılmalıdır.{employee}, {2025 - birthdate} yaşında bir yazılımcıdır.</li>
        <li className="test">Jsx yapıları html yapısı olmadığı için classlar js'deki gibi className şeklinde verilir.</li>
        <li>.jsx doslarında external css dosyaları import edilerek bağlanır. Css dosyaları React uygulamasında globale etki eder. Component bazlı css dosyası oluşturma mantığı vardır. Ancak tüm css dosyaları projenin tamamına etki eder. Sadeceki micro frontend yani ulaşılabilirlik açısından ayrı ayrı yapılır.</li>
        <li style={{ color: "green" }}>
          Eğer inline bir css yazılacaksa çift süslü parantez kullanılmalıdır.
        </li>
      </ul>
      <h3>Yeni Bir Proje Oluşturmanın Adımları</h3>
      <ol>
        <li>React Projesinin oluşturulabilmesi için sistemde NodeJS yüklü olmalıdır.</li>
        <li>terminale "node -v" veya "node --version" yazarak nodejs bilgisi öğrenilebilir.</li>
        <li>Vite üzerinden yeni bir starter react projesi olulturmak için terminale "npm create vite@latest proje-adi yazılır.</li>
        <li>Select Framework: React seçilir.</li>
        <li>Select Variant: Javascript seçilir.</li>
        <li>Bu adımlardan sonra verdiğimiz proje adında dizine bir klasör oluşturulur. Klasörün içerisinde gerekli dosyalar gelmiştir.</li>
        <li>Karışıklık olmaması açısında klasör VSCode içerisine sürüklenir ve VSCode proje klasörü root' unda açılır. </li>
        <li>Projenin çalışması için gerekli modüllerin yüklenemsi için terminale "npm i" veya "npm install" yazılarak node_modules klasörü oluşturulması ve proje için gerekli dependencieslerin indirilmesi sağlanır.</li>
        <li>projeyi başlatmak için terminale "npm run dev" yazılır.</li>
        <li>proje default olarak loacalhost:5173 portunda ayağa kaldırılır.</li>
      </ol>
        {
          // Burada JS kodları yazılabilir.
          // React içerisinde bir map işlemi yapılıyorsa map ile dönen ata yapıya bir unique bir key parametresi verilmelidir. Bu React uygulamasının performanslı çalışması için gereklidir.
        }
      <CardList/>
    </React.Fragment>
  )
}

export default App
