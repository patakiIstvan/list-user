import Users from "./components/Users";
import "./styles.scss";
import State from "./State";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Pagony teszt feladat</h1>
      </div>
      <div className="content">
        <p>A feladat a következő:</p>
        <p>
          Kérlek, készíts egy alkalmazást amelyben user adatokat lehet felvinni,
          szerkeszteni és törölni, az alábbi megkötések alapján.
        </p>
        <ul>
          <li>
            A Users (Users.js) komponensben listázd ki a felhasználók adatait.
            <ul>
              <li>name</li>
              <li>email</li>
              <li>phone</li>
            </ul>
          </li>
          <li>Felhasználók törölhetőek legyenek.</li>
          <li>
            A Users (Users.js) komponens alatt legyen egy Form komponens
            (Form.js), amivel új felhasználókat lehet felrögzíteni.
          </li>
          <li>
            A meglévő userek szerkeszthetőek legyenek a már meglévő Form
            (Form.js) komponenssel!
          </li>
          <li>A gombok felirata illeszkedjen a művelethez.</li>
          <li>
            A szerkesztés (Form.js) csak adat módosítás esetén legyen látható
            (Collapse.js).
          </li>
          <li>
            A styles.sass-ban a gombok és az input mezők tulajdonságiai
            egységesek legyenek. (Egy változóban szükséges megoldani!)
            <ul>
              <li>border-radius</li>
              <li>padding</li>
              <li>margin</li>
            </ul>
          </li>
        </ul>
        <State>
          <Users />
        </State>
      </div>
    </div>
  );
}
