import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

// Actions
import { UserActionTypes } from "../../redux/user/action-types";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  //useSelector é para pegar o estado do reducer ou pegar um valor do estado do reducer
  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);
  const dispatch = useDispatch();//para mandar uma acao com dados para o reducer

  console.log({currentUser});//para teste

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {//acao de login
    dispatch({ type: UserActionTypes.LOGIN,
      payload: {
        name: "joao",
        email: "joao@gmail.com",
        password: "123456",
      }
     });
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLoginClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
