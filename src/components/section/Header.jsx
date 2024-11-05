import React from 'react'

import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span>KUO's<br />playlist</span>
                </a>
            </h1>

            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/'>
                            <CiBaseball /> Home
                        </a>
                    </li>
                    <li>
                        <a href='/today'>
                            <CiMoneyBill /> 오늘의 추천음악
                        </a>
                    </li>
                    <li>
                        <a href='/developer'>
                            <CiCoins1 /> 추천 플레이리스트
                        </a>
                    </li>
                    <li>
                        <a href='/webd'>
                            <CiBoxes /> 최신 음악
                        </a>
                    </li>
                    <li>
                        <a href='/website'>
                            <CiBullhorn /> 뮤직비디오
                        </a>
                    </li>
                    <li>
                        <a href='/gsap'>
                            <CiCoffeeCup /> Pop
                        </a>
                    </li>
                    <li>
                        <a href='/port'>
                            <CiDumbbell /> K-pop
                        </a>
                    </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/search/webstoryboy'>플레이리스트</a>
                    </li>
                    <li>
                        <a href='/search/html'>팝</a>
                    </li>
                    <li>
                        <a href='/search/css'>케이팝</a>
                    </li>
                    <li>
                        <a href='/search/javascript'>힙합</a>
                    </li>
                    <li>
                        <a href='/search/react.js'>OST</a>
                    </li>
                    <li>
                        <a href='/search/vue.js'>발라드</a>
                    </li>
                    <li>
                        <a href='/search/next.js'>밴드</a>
                    </li>
                    <li>
                        <a href='/search/node.js'>댄스</a>
                    </li>
                    <li>
                        <a href='/search/sql'>트로트</a>
                    </li>
                    <li>
                        <a href='/search/React Portfolio'>클래식</a>
                    </li>
                    <li>
                        <a href='/search/NewJeans'>인기차트</a>
                    </li>
                </ul>
            </nav>
            
            <div className='header__sns'>
                <ul>
                    <li>
                        <a href='https://github.com/webstoryboy' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/webstoryboy' rel='noopener noreferrer'>
                            <AiFillYoutube />
                        </a>
                    </li>
                    <li>
                        <a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'>
                            <AiOutlineCodepen />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/webstoryboy' rel='noopener noreferrer'>
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header