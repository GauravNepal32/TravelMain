import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../image/company/1.webp'
import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../Auth/auth';
const Navbar = () => {
    const location = useLocation().pathname.slice(1, 5);
    const [showNav, setShowNav] = useState(true);
    const auth = useAuth();
    useEffect(() => {
        { location === 'user' ? setShowNav(false) : setShowNav(true) }
    }, [location])
    return (
        <div>
            {showNav ?
                <>
                    <div className="navbar-top-container">
                        <div className="container py-3 px-md-5">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex contact-top d-md-flex d-none">
                                    <div className="d-flex">
                                        <i class="bi bi-telephone-fill"></i>
                                        <p className='ms-3'>9876543210</p>
                                    </div>
                                    <div className="d-flex ms-3">
                                        <i class="bi bi-envelope-fill"></i>
                                        <p className="ms-3">info@gmail.com</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="social-links-container">
                                        <i class="bi bi-facebook"></i>
                                        <i class="bi bi-instagram"></i>
                                        <i class="bi bi-twitter"></i>
                                        <i class="bi bi-youtube"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="navbar position-sticky top-0 navbar-expand-lg">
                        <div class="container px-md-5">
                            <a class="navbar-brand" href="#">
                                <img width={129} height={34} src={logo} alt="" />
                            </a>
                            <div className="outside-navigation-cotnainer order-lg-1 order-0 d-flex ms-auto me-md-4 me-2">
                                <div className="nav-search-container d-lg-block d-none">
                                    <span class="material-symbols-outlined">
                                        search
                                    </span>
                                </div>
                                {auth.isLogin ?
                                    <Link to='/user/dashboard' className="btn profile-container ms-md-4 ms-2">
                                        <span class="material-symbols-outlined">
                                            account_circle
                                        </span>
                                    </Link>
                                    :
                                    <div className='position-relative'>
                                        <div className="btn profile-container ms-md-4 ms-2">
                                            <span class="material-symbols-outlined">
                                                account_circle
                                            </span>
                                            <div className="profile-collapse-container list-unstyled">
                                                <li>
                                                    <Link to='/login'>
                                                        Login
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/register'>
                                                        Register
                                                    </Link>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                }

                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="material-symbols-outlined">
                                    menu
                                </span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Home
                                            <span class="material-symbols-outlined">
                                                expand_more
                                            </span>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">About Us</a></li>
                                            <li><a class="dropdown-item" href="#">Our Services</a></li>
                                            <li><a class="dropdown-item" href="#">Why Us?</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Destination
                                            <span class="material-symbols-outlined">
                                                expand_more
                                            </span>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">Kathmandu</a></li>
                                            <li><a class="dropdown-item" href="#">Pokhara</a></li>
                                            <li><a class="dropdown-item" href="#">Lumbini</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Tours Packages
                                            <span class="material-symbols-outlined">
                                                expand_more
                                            </span>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">Everst Hiking</a></li>
                                            <li><a class="dropdown-item" href="#">Temple Visit</a></li>
                                            <li><a class="dropdown-item" href="#">Remote Destination</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Blogs
                                            <span class="material-symbols-outlined">
                                                expand_more
                                            </span>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">Travel Guide</a></li>
                                            <li><a class="dropdown-item" href="#">Travel Article</a></li>
                                            <li><a class="dropdown-item" href="#">Travel News</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pages
                                            <span class="material-symbols-outlined">
                                                expand_more
                                            </span>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">Terms & Conditions</a></li>
                                            <li><a class="dropdown-item" href="#">Policy </a></li>
                                            <li><a class="dropdown-item" href="#">Travel Insurance</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Contact

                                        </a>

                                    </li>

                                </ul>
                            </div>

                        </div>
                    </nav>
                </> :
                <>
                    <nav class="navbar dashboard-navbar position-sticky top-0 navbar-expand-lg">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                                <img width={129} height={34} src={logo} alt="" />
                            </a>
                            <div className="outside-navigation-cotnainer order-lg-1 order-0 d-flex ms-auto me-md-4 me-2">
                                <div className=' d-flex align-items-center'>
                                    <Link className='text-danger text-decoration-none d-flex' to='/user/wishlist'>
                                        <span class="material-symbols-outlined me-1">
                                            favorite
                                        </span>
                                        Wishlist
                                    </Link>
                                    <div className="btn ms-md-4 d-flex  ms-2">
                                        <span class="material-symbols-outlined me-3">
                                            account_circle
                                        </span>
                                        <span>Demo</span>
                                    </div>
                                    <button onClick={auth.logout} className="btn d-flex  ms-2">
                                        <span class="material-symbols-outlined me-3">
                                            logout
                                        </span>

                                    </button>
                                </div>
                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="material-symbols-outlined">
                                    menu
                                </span>
                            </button>
                        </div>
                    </nav>
                </>
            }

        </div>
    )
}

export default Navbar