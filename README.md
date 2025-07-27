# Shopping Portal 🛍️

A modern, responsive frontend e-commerce web application built with vanilla HTML, CSS, and JavaScript. This shopping portal demonstrates a complete online shopping experience with cart management, customer profiles, loyalty programs, and more - all running client-side.

## ✨ Features

### 🛒 Core Shopping Experience
- **Product Browsing**: Interactive product grid with images, names, prices, and stock levels
- **Smart Filtering**: Search by product name and filter by categories (Clothing, Accessories, Electronics, Others)
- **Cart Management**: Add items, update quantities, remove products with real-time subtotal calculation
- **Wishlist**: Save favorite items for later purchase
- **Stock Management**: Real-time stock tracking with low stock alerts (≤5 items) and 10-minute cart reservations

### 👤 Customer Dashboard
Access comprehensive account management through the **CUSTOMER** button:

- **Profile Management**: Edit and save personal information (name, email, phone) with validation
- **Purchase History**: View complete order history with dates, items, and totals
- **Loyalty Points System**: Track current points and transaction history
- **Address Management**: Save and manage delivery addresses
- **Preferences**: Set preferred currency (USD/INR) with persistent storage

### 💳 Payment & Checkout
- **Multiple Payment Methods**: Cash on Delivery, UPI, Credit/Debit Card
- **Loyalty Points Redemption**: Use points for discounts (100 points = $1, max 20% of subtotal)
- **Receipt Generation**: Detailed receipts with itemized breakdown and email simulation
- **Tax Calculation**: Automatic 10% tax calculation

### 🎨 User Experience
- **Theme Toggle**: Switch between light and dark modes
- **Multi-Currency Support**: USD/INR conversion with live rate (1 USD = 83.5 INR)
- **Responsive Design**: Optimized for desktop and mobile devices
- **Persistent Preferences**: Theme and currency settings saved across sessions

## 🚀 Quick Start

### Prerequisites
- Modern web browser with ES6 support
- No external dependencies required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kanishka-mohankumar/Shopping-Portal.git
   cd Shopping-Portal
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   
   # Option 3: Using Node.js
   npx http-server
   ```

## 📁 Project Structure

```
Shopping-Portal/
│
├── index.html          # Main HTML structure and modals
├── styles.css          # Complete styling and theme definitions  
├── script.js           # Core JavaScript functionality
└── README.md           # Project documentation
```

## 🎯 Usage Guide

### Product Browsing
- Use the **search bar** to find specific products
- Select **categories** from the dropdown filter
- Click any product or press `Enter`/`Space` to add to cart

### Cart Operations
- View cart items in the **sidebar**
- Adjust quantities using input fields
- Remove items with the delete button
- Monitor **subtotal**, **tax (10%)**, and **total**

### Customer Management
1. Click the **CUSTOMER** button to access dashboard
2. Navigate through tabs:
   - **Profile**: Update personal information
   - **History**: Review past purchases
   - **Points**: Check loyalty balance and history
   - **Address**: Manage delivery locations
   - **Preferences**: Set currency and other options

### Checkout Process
1. Click **PAY** button when ready
2. Select preferred payment method
3. Optionally apply loyalty points for discount
4. Confirm payment to generate receipt
5. Option to "email" receipt (simulation)

### Additional Features
- **Theme Toggle**: Switch between light/dark modes
- **Currency Switch**: Toggle between USD and INR
- **Points Redemption**: Redeem 1000+ points for rewards
- **New Order**: Clear cart and start fresh

### 🔧 Technical Details

### Frontend-Only Implementation
- **Pure client-side application** - no backend required
- **Mock data**: Products and customer information stored in JavaScript objects
- **Simulated features**: Payment processing, receipt generation, and email functionality are frontend demonstrations

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Requires ES6 support and CSS Grid/Flexbox

### Data Storage
- **localStorage**: Theme preferences, currency settings
- **In-memory storage**: Cart data, customer information, and product inventory
- **No database**: All data is client-side and resets on page refresh

### Validation Features
- **Email validation**: Standard email format checking
- **Phone validation**: Numeric format verification
- **Required fields**: Non-empty validation for critical data

## 🎮 Interactive Elements

### Keyboard Support
- `Enter` or `Space`: Add product to cart
- Standard navigation for form elements
- Modal keyboard interactions

### Visual Feedback
- **Stock alerts**: Low inventory warnings
- **Loading states**: Processing indicators
- **Success messages**: Confirmation toasts
- **Error handling**: User-friendly error messages

## 📊 Loyalty Program

- **Earning**: 10 points per dollar spent
- **Redemption**: 100 points = $1 discount
- **Maximum discount**: 20% of subtotal
- **Minimum redemption**: 1000 points
- **Starting balance**: 4200 points

## 🔮 Future Enhancements

### Frontend Extensions
- **SALE** button: Promotional pricing features
- **PURCHASES** button: Advanced order management
- **Enhanced UI**: More interactive animations and transitions

### Backend Integration (Future Development)
- **Database integration**: Persistent product and user data
- **User authentication**: Login/registration system
- **Real payment processing**: Actual payment gateway integration
- **API development**: RESTful services for data management
- **Admin dashboard**: Inventory and order management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with vanilla JavaScript for maximum compatibility
- Responsive design principles
- Modern UI/UX patterns
- Accessibility considerations

## 👨‍💻 Author

Created and maintained by [@kanishka-mohankumar](https://github.com/kanishka-mohankumar)


