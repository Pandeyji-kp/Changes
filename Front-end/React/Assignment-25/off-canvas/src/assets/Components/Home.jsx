import React, { useState } from 'react'


export default function Home() {
    const [isCartOpen, setIsCartOpen] = useState(); // State to manage cart visibility

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen); // Toggle the cart open/close state
    };
    return (
        <>
            <header class="navbar">
                <nav class="container">
                    <div class="nav-center">
                        <a href="#">Product</a>
                        <a href="#">Features</a>
                        <a href="#">Marketplace</a>
                        <a href="#">Company</a>
                    </div>
                    <div class="nav-right">
                    <button onClick={toggleCart} className="view-cart">View Cart</button>
                        <div class={`cart-container ${isCartOpen ? 'cart-open' : ''}`}>
                            <div class="cart-panel">
                                <div class="cart-header">
                                    <h2 class="cart-title">Shopping cart</h2>
                                    <button class="close-button" onClick={toggleCart}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="close-icon">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>

                                <div class="cart-items">
                                    <div class="cart-item">
                                        <div class="item-image">
                                            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Throwback Hip Bag" />
                                        </div>
                                        <div class="item-details">
                                            <div class="item-header">
                                                <h3><a href="#">Throwback Hip Bag</a></h3>
                                                <p class="item-price">$90.00</p>
                                            </div>
                                            <p class="item-color">Salmon</p>
                                            <div class="item-footer">
                                                <p class="item-quantity">Qty 1</p>
                                                <button class="remove-button">Remove</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="cart-item">
                                        <div class="item-image">
                                            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Medium Stuff Satchel" />
                                        </div>
                                        <div class="item-details">
                                            <div class="item-header">
                                                <h3><a href="#">Medium Stuff Satchel</a></h3>
                                                <p class="item-price">$32.00</p>
                                            </div>
                                            <p class="item-color">Blue</p>
                                            <div class="item-footer">
                                                <p class="item-quantity">Qty 1</p>
                                                <button class="remove-button">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="cart-summary">
                                    <div class="summary">
                                        <p>Subtotal</p>
                                        <p>$262.00</p>
                                    </div>
                                    <p class="shipping-info">Shipping and taxes calculated at checkout.</p>
                                    <div class="checkout-button">
                                        <a href="#" class="checkout-btn">Checkout</a>
                                    </div>
                                    <div class="continue-shopping">
                                        <p>or <button class="continue-btn">Continue Shopping →</button></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* <!-- Hero Section --> */}
            <section class="hero">
                <div class="container">
                    <h1>Work with us</h1>
                    <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                    <div class="hero-links">
                        <a href="#">Open roles →</a>
                        <a href="#">Internship program →</a>
                        <a href="#">Our values →</a>
                        <a href="#">Meet our leadership →</a>
                    </div>
                    <div class="hero-stats">
                        <div>
                            <h2>12</h2>
                            <p>Offices worldwide</p>
                        </div>
                        <div>
                            <h2>300+</h2>
                            <p>Full-time colleagues</p>
                        </div>
                        <div>
                            <h2>40</h2>
                            <p>Hours per week</p>
                        </div>
                        <div>
                            <h2>Unlimited</h2>
                            <p>Paid time off</p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
