import type {FormUsers} from "../global/types/FormUsers.ts";

export const fieldsValidate = (user: FormUsers) => {
    return {
        login: [
            (login: string) => !!login && login.trim().length > 0 || 'Логин является обязательным полем',
            (login: string) => (login?.length ?? 0) <= 100 || 'Логин не может состоять более чем из 100 символов'
        ],
        password: user.record_type === 'Локальная' ? [
            (password: string) => !!password && password.trim().length > 0 || 'Пароль является обязательным полем',
            (password: string) => (password?.length ?? 0) <= 100 || 'Пароль не может состоять более чем из 100 символов'
        ] : [],
        marks: [
            (marks: string) => marks.length <= 50 || 'Метки не должны превышать 50 символов'
        ]
    }
}
