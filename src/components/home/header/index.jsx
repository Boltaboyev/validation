import React, {useState, useEffect} from "react"
import {toast} from "react-toastify"

// img
import logo from "../../../assets/img/logo.png"

// icons
import {AiOutlineShoppingCart} from "react-icons/ai"
import {IoMdHeartEmpty} from "react-icons/io"
import {LoginOutlined, SearchOutlined} from "@ant-design/icons"
import {GrLocation} from "react-icons/gr"
import {FiPhoneCall} from "react-icons/fi"
import {CgMenuGridO} from "react-icons/cg"
import {Input} from "antd"

const Header = ({setOpen, setRegisterOpen, user, setUser}) => {
    const logout = () => {
        localStorage.removeItem("user")
        setUser(null)
        toast.info("logout")
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    return (
        <header className="sticky top-0 bg-white z-[999]">
            <nav className="flex flex-col">
                <nav className="py-[10px] border-b border-gray-200">
                    <nav className="container2 flex justify-between items-center gap-[20px]">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-[130px] cursor-pointer"
                        />

                        <Input
                            className="!w-[440px]"
                            size="large"
                            placeholder="Введите номер запчасти или VIN"
                            addonAfter={
                                <SearchOutlined className="text-[#6b59cc]" />
                            }
                        />

                        <button className="text-[12px] flex justify-center items-center gap-[5px] cursor-pointer">
                            <GrLocation className="text-[19px] text-[#6b59cc]" />
                            Санкт-Петербург
                        </button>

                        <button className="text-[14px] font-medium flex justify-center items-center gap-[5px] cursor-pointer">
                            <FiPhoneCall className="text-[19px] text-[#6b59cc]" />
                            +7 (347) 229-46-45
                        </button>

                        {user ? (
                            <div className="flex justify-center items-center gap-[15px]">
                                <p className="capitalize font-medium text-[#6b59cc]">
                                    {user.name}
                                </p>
                                <button
                                    onClick={logout}
                                    className="text-[14px] cursor-pointer flex justify-center items-center gap-[10px] border bg-[#6b59cc] p-[8px_10px] text-white outline-none rounded-lg">
                                    Log out
                                    <LoginOutlined />
                                </button>
                            </div>
                        ) : (
                            <div className="flex justify-center items-center gap-[10px]">
                                <button
                                    onClick={() => setOpen(true)}
                                    className="text-[14px] cursor-pointer flex justify-center items-center gap-[5px] border bg-[#6b59cc] p-[8px_10px] text-white outline-none rounded-lg">
                                    Login
                                </button>

                                <button
                                    onClick={() => setRegisterOpen(true)}
                                    className="text-[14px] cursor-pointer flex justify-center items-center gap-[5px] border border-[#6b59cc] text-[#6b59cc] outline-none p-[7px_10px] rounded-lg">
                                    Sign up
                                </button>
                            </div>
                        )}
                    </nav>
                </nav>

                <nav className="py-[10px] border-b border-gray-200">
                    <nav className="container2 flex justify-between items-center gap-[20px]">
                        <button className="flex justify-center text-[14px] text-nowrap items-center gap-[4px] p-[10px_13px] rounded-lg bg-[#6b59cc] text-white cursor-pointer active:scale-95">
                            <CgMenuGridO className="text-[19px]" />
                            Все категории
                        </button>

                        <button
                            size="large"
                            className="!text-[14px]"
                            type="text">
                            Запчасти для ТО
                        </button>
                        <button
                            size="large"
                            className="!text-[14px]"
                            type="text">
                            Автомасла
                        </button>
                        <button
                            size="large"
                            className="!text-[14px]"
                            type="text">
                            Оригинальные запчасти
                        </button>
                        <button
                            size="large"
                            className="!text-[14px]"
                            type="text">
                            Лампочки
                        </button>
                        <button
                            size="large"
                            className="!text-[14px]"
                            type="text">
                            Аккумуляторы
                        </button>

                        <button className="flex flex-col gap-[2px] justify-center items-center cursor-pointer text-[#6b59cc] relative max-[600px]:hidden">
                            <AiOutlineShoppingCart className="text-[25px]" />
                            <p className="text-[12px] opacity-70">Корзина</p>
                        </button>

                        <button className="flex flex-col gap-[2px] justify-center items-center cursor-pointer relative text-[#6b59cc] max-[600px]:hidden">
                            <IoMdHeartEmpty className="text-[25px]" />
                            <p className="text-[12px] opacity-70">Избранное</p>
                        </button>
                    </nav>
                </nav>
            </nav>
        </header>
    )
}

export default Header
