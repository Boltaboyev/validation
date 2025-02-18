import React, {useState} from "react"
import {Drawer} from "@mui/material"
import axios from "axios"
import {z} from "zod"
import Card from "./card"
import SwiperComponent from "./swiper"
import Header from "./header"
import { toast } from "react-toastify"

const registerSchema = z.object({
    name: z.string().min(2, "Имя должно содержать минимум 2 буквы"),
    surname: z.string().min(2, "Фамилия должна содержать минимум 2 буквы"),
    email: z.string().email("Неверный адрес эл. почты"),
    password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
})

const loginSchema = z.object({
    email: z.string().email("Неверный адрес эл. почты"),
    password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
})

const HomeComponent = () => {
    const [open, setOpen] = useState(false)
    const [registerOpen, setRegisterOpen] = useState(false)
    const [registerData, setRegisterData] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    })
    const [loginData, setLoginData] = useState({email: "", password: ""})
    const [errors, setErrors] = useState({})
    const [loginError, setLoginError] = useState("")
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

    const handleRegisterChange = (e) => {
        setRegisterData({...registerData, [e.target.name]: e.target.value})
    }

    const handleLoginChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault()
        setErrors({})

        const validation = registerSchema.safeParse(registerData)
        if (!validation.success) {
            const errorMessages = validation.error.format()
            setErrors({
                name: errorMessages.name?._errors[0],
                surname: errorMessages.surname?._errors[0],
                email: errorMessages.email?._errors[0],
                password: errorMessages.password?._errors[0],
            })
            return
        }

        try {
            await axios.post(
                "https://679baa2233d316846324b02f.mockapi.io/users",
                registerData
            )
            setRegisterData({name: "", surname: "", email: "", password: ""})
            setRegisterOpen(false)
            toast.success("successfully register")
        } catch (error) {
            console.error(error)
        }
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        setLoginError("")

        const validation = loginSchema.safeParse(loginData)
        if (!validation.success) {
            const errorMessages = validation.error.format()
            setErrors({
                email: errorMessages.email?._errors[0],
                password: errorMessages.password?._errors[0],
            })
            return
        }

        try {
            const response = await axios.get(
                "https://679baa2233d316846324b02f.mockapi.io/users"
            )
            const user = response.data.find(
                (u) =>
                    u.email === loginData.email &&
                    u.password === loginData.password
            )

            if (user) {
                localStorage.setItem("user", JSON.stringify(user))
                setUser(user)
                setOpen(false)
                toast.success("successfully login")
            } else {
                setLoginError("Неверный адрес эл. почты или пароль")
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section>
            <Header
                setOpen={setOpen}
                setRegisterOpen={setRegisterOpen}
                user={user}
                setUser={setUser}
            />
            <div className="container2 py-[20px]">
                <SwiperComponent />

                <Drawer
                    anchor="right"
                    open={open}
                    onClose={() => setOpen(false)}>
                    <div className="w-[450px] p-4 flex flex-col gap-[20px]">
                        <h2 className="text-lg font-semibold mb-4">Вход</h2>
                        <form
                            className="flex flex-col gap-[10px]"
                            onSubmit={handleLoginSubmit}>
                            <div className="flex flex-col gap-0">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Адрес эл. почты"
                                    value={loginData.email}
                                    onChange={handleLoginChange}
                                    className="border border-[#6b59cc] p-[5px] rounded-md outline-none"
                                />
                                {errors.email && (
                                    <small className="text-red-600">
                                        {errors.email}
                                    </small>
                                )}
                            </div>

                            <div className="flex flex-col gap-0">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Пароль"
                                    value={loginData.password}
                                    onChange={handleLoginChange}
                                    className="border border-[#6b59cc] p-[5px] rounded-md outline-none"
                                />
                                {errors.password && (
                                    <small className="text-red-600">
                                        {errors.password}
                                    </small>
                                )}
                            </div>

                            {loginError && (
                                <p className="text-red-600 text-sm">
                                    {loginError}
                                </p>
                            )}

                            <button className="bg-[#6b59cc] p-[5px] rounded-md outline-none cursor-pointer text-white">
                                Войти
                            </button>
                        </form>
                    </div>
                </Drawer>

                <Drawer
                    anchor="right"
                    open={registerOpen}
                    onClose={() => setRegisterOpen(false)}>
                    <div className="w-[450px] p-4 flex flex-col gap-[20px]">
                        <h2 className="text-lg font-semibold mb-4">
                            Регистрация
                        </h2>
                        <form
                            className="flex flex-col gap-[10px]"
                            onSubmit={handleRegisterSubmit}>
                            <div className="flex flex-col gap-1">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Имя"
                                    value={registerData.name}
                                    onChange={handleRegisterChange}
                                    className="border border-[#6b59cc] p-[5px] rounded-md outline-none"
                                />
                                {errors.name && (
                                    <small className="text-red-600">
                                        {errors.name}
                                    </small>
                                )}
                            </div>

                            <div className="flex flex-col gap-1">
                                <input
                                    type="text"
                                    name="surname"
                                    placeholder="Фамилия"
                                    value={registerData.surname}
                                    onChange={handleRegisterChange}
                                    className="border border-[#6b59cc] p-[5px] rounded-md outline-none"
                                />
                                {errors.surname && (
                                    <small className="text-red-600">
                                        {errors.surname}
                                    </small>
                                )}
                            </div>

                            <div className="flex flex-col gap-1">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Адрес эл. почты"
                                    value={registerData.email}
                                    onChange={handleRegisterChange}
                                    className="border border-[#6b59cc] p-[5px] rounded-md outline-none"
                                />
                                {errors.email && (
                                    <small className="text-red-600">
                                        {errors.email}
                                    </small>
                                )}
                            </div>

                            <div className="flex flex-col gap-1">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Пароль"
                                    value={registerData.password}
                                    onChange={handleRegisterChange}
                                    className="border border-[#6b59cc] p-[5px] rounded-md outline-none"
                                />
                                {errors.password && (
                                    <small className="text-red-600">
                                        {errors.password}
                                    </small>
                                )}
                            </div>

                            <button className="bg-[#6b59cc] p-[5px] rounded-md outline-none cursor-pointer text-white">
                                Регистрация
                            </button>
                        </form>
                    </div>
                </Drawer>

                <h1 className="text-3xl font-medium text-gray-900 p-[30px_0_12px_0]">
                    Рекомендуем
                </h1>

                <div className="flex flex-col gap-[30px] justify-center">
                    <div className="grid grid-cols-5 gap-[20px] max-[1170px]:grid-cols-4 max-[885px]:grid-cols-3 max-[695px]:grid-cols-2 max-[400px]:grid-cols-1">
                        {[...Array(5)].map((_, index) => (
                            <Card key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeComponent
