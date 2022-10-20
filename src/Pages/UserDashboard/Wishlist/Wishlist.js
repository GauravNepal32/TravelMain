import React, { useEffect, useState } from 'react'
import './Wishlist.css'
import axios from 'axios'
import { useAuth } from '../../../Components/Auth/auth';
import image1 from '../../../image/Destination/tour-4.jpeg'
import { Link } from 'react-router-dom';
const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const auth = useAuth();

    const removeWishList = async (id) => {
        try {
            const response = await axios.delete(`${auth.baseURL}/api/remove-wishlist/${id}`,
                { withCredentials: true }, {
            })
            console.log(response)
            { response.status === 200 && loadData() }
        } catch (err) {
            console.log(err)
        }
    }

    const loadData = async () => {
        try {
            const response = await axios.get(`${auth.baseURL}/api/get-wishlist_data`, { withCredentials: true })
            response.status === 200 && setWishlist(response.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <div>
            <div className='text-grey'>
                <div className="fs-3 pt-md-5 fw-bold ps-2 text-black">Wishlist</div>
                <div className="edit-pass-container w-100 mt-3 d-flex align-items-center">
                    <div className="w-100">
                        {console.log(wishlist)}
                        <div className="wishlist-top-container">
                            Total:{wishlist.length}
                        </div>
                        <div className="wishlist-table mt-3">
                            <table className='w-100'>
                                <thead className='p-2'>
                                    <tr>
                                        <th>Title & Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='mt-5 p-3'>
                                    {
                                        wishlist.map((wish) => (
                                            <tr className='mt-3'>
                                                <td className='d-flex justify-content-center align-items-center'>
                                                    <div className="wishlist-image">
                                                        <img className='img-fluid' src={image1} alt="" />
                                                    </div>
                                                    <Link to={`/package/${wish.package}`} className="wishlist-title text-decoration-none fw-bold text-black ms-3">{wish.title}</Link>
                                                </td>
                                                <td className=''>{
                                                    <button onClick={() => { removeWishList(wish.package) }} className="wishlist-table-btn btn">
                                                        <span class="material-symbols-outlined">
                                                            favorite
                                                        </span>
                                                    </button>
                                                }</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist