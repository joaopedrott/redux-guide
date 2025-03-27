const initialState = {
    currentUser: null, // Pode armazenar o nome do usuário ou null
};

const userReducer = (state = initialState, action) => {
    if(action.type==='user/login') {
        return {
            ...state,
            currentUser: action.payload, // Armazena apenas o `name` do usuário
        };
    } else if (action.type==='user/logout') {
        return {
            ...state,
            currentUser:null, // Reseta o usuário para null no logout
        }
    } else {
        return state;
    }

/*     switch (action.type) {
        case 'user/login':
            return {
                ...state,
                currentUser: action.payload.name, // Armazena apenas o `name` do usuário
            };
        case 'user/logout':
            return {
                ...state,
                currentUser: null, // Reseta o usuário para null no logout
            };
        default:
            return state;
    } */
};

export default userReducer;

// Removed duplicate and unused code block

/*

// Define o tipo do estado inicial
interface UserState {
    currentUser: string | null; // Pode armazenar o nome do usuário ou null
}

// Define os tipos de ações
interface LoginAction {
    type: 'user/login';
    payload: {
        username: string;
        password: string;
        email: string;
    };
}

interface LogoutAction {
    type: 'user/logout';
}

// Tipo unificado de ações
type UserAction = LoginAction | LogoutAction;

// Define o estado inicial
const initialState: UserState = {
    currentUser: null,
};

// Define o reducer com os novos campos no payload
const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case 'user/login':
            return {
                ...state,
                currentUser: action.payload.username, // Armazena apenas o `username` do usuário
            };
        case 'user/logout':
            return {
                ...state,
                currentUser: null,
            };
        default:
            return state;
    }
};

export default userReducer;

*/