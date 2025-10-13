// Application Data
const appData = {
    products: [
        { id: 1, name: "Fresh Tomatoes", price: 40, category: "vegetables", stock: 50, image: "https://i.ebayimg.com/images/g/xDgAAOSwgOVl9Yh3/s-l1200.jpg" },
        { id: 2, name: "Organic Apples", price: 120, category: "fruits", stock: 30, image: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGV8ZW58MHx8MHx8fDA%3D" },
        { id: 3, name: "Green Cucumbers", price: 30, category: "vegetables", stock: 40, image: "https://static.toiimg.com/photo/94838636.cms" },
        { id: 4, name: "Fresh Carrots", price: 50, category: "vegetables", stock: 25, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
        { id: 5, name: "Ripe Bananas", price: 50, category: "fruits", stock: 35, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
        { id: 6, name: "Fresh Potatoes", price: 40, category: "vegetables", stock: 60, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
        { id: 7, name: "Fresh Mangoes", price: 80, category: "fruits", stock: 20, image:"https://media.istockphoto.com/id/168278888/photo/fresh-slices-of-mango-on-a-bed-of-leaves.jpg?s=612x612&w=0&k=20&c=Wmtif6WbhUhNZADb8Ay_CnA26McrL-A3tS8V9M65C5w=" },
        { id: 8, name: "Sweet Guavas", price: 50, category: "fruits", stock: 25, image: "https://media.istockphoto.com/id/1224636159/photo/closeup-of-a-red-guava-cut-in-half-in-the-background-several-guavas-and-green-leaf.jpg?s=612x612&w=0&k=20&c=KJ9YilkRRuFh0bnw64Ol0IZDfoQF7UIxyC6dRVIjaoA=" },
        { id: 9, name: "Fresh Grapes", price: 70, category: "fruits", stock: 25, image: "https://images.pexels.com/photos/60021/grapes-wine-fruit-vines-60021.jpeg?cs=srgb&dl=pexels-pixabay-60021.jpg&fm=jpg" },
        { id: 10, name: "Fresh Brinjal", price: 60, category: "vegetables", stock: 30, image: "https://cdn.bazodo.com/images/p/7/3/9/739-large_default.jpg" },
        { id: 11, name: "Organic Onions", price: 35, category: "vegetables", stock: 50, image: "https://t4.ftcdn.net/jpg/04/32/30/55/360_F_432305577_JB4kKOPESHH2gZculYUZlj5U2vCbdjxn.jpg" },
        { id: 12, name: "Fresh Drumstick", price: 45, category: "vegetables", stock: 20, image: "https://t3.ftcdn.net/jpg/05/85/66/68/360_F_585666841_9PNi8WG6rn45vYLY54YZGvxLblBVkAvh.jpg" }
    ],
    customers: [],
    currentCustomer: null,
    cart: [],
    billItems: [],
    bulkOrderItems: [],
    bulkOrders: [],
    shopStatus: "open",
    shopSettings: {
        phone: "+91 9876543210",
        hours: "7:00 AM - 9:00 PM",
        address: "Aravakurichi, Tamil Nadu 639201"
    },
    salesData: [],
    updates: []
};

// DOM Elements
const customerModal = document.getElementById('customerModal');
const ownerModal = document.getElementById('ownerModal');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const ownerDashboard = document.getElementById('ownerDashboard');
const customerDashboard = document.getElementById('customerDashboard');
const paymentPage = document.getElementById('paymentPage');
const customerLoginBtn = document.getElementById('customerLoginBtn');
const ownerLoginBtn = document.getElementById('ownerLoginBtn');
const shopNowBtn = document.getElementById('shopNowBtn');
const closeModalButtons = document.querySelectorAll('.close-modal');
const modalTabs = document.querySelectorAll('.tab');
const dashboardTabs = document.querySelectorAll('.dashboard-tab');
const dashboardContents = document.querySelectorAll('.dashboard-content');
const productsContainer = document.getElementById('productsContainer');
const customerProductsContainer = document.getElementById('customerProductsContainer');
const cartItemsContainer = document.getElementById('cartItems');
const customerCartItems = document.getElementById('customerCartItems');
const subtotalElement = document.getElementById('subtotal');
const deliveryChargeElement = document.getElementById('deliveryCharge');
const totalAmountElement = document.getElementById('totalAmount');
const customerSubtotal = document.getElementById('customerSubtotal');
const customerDeliveryCharge = document.getElementById('customerDeliveryCharge');
const customerTotalAmount = document.getElementById('customerTotalAmount');
const loyaltyDiscount = document.getElementById('loyaltyDiscount');
const loyaltyPoints = document.getElementById('loyaltyPoints');
const customerName = document.getElementById('customerName');
const productForm = document.getElementById('productForm');
const productSubmitBtn = document.getElementById('productSubmitBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const ownerProductsList = document.getElementById('ownerProductsList');
const billingForm = document.getElementById('billingForm');
const billProductSelect = document.getElementById('billProduct');
const addBillItemBtn = document.getElementById('addBillItem');
const billItemsContainer = document.getElementById('billItems');
const billSubtotalElement = document.getElementById('billSubtotal');
const billTaxElement = document.getElementById('billTax');
const billTotalElement = document.getElementById('billTotal');
const printBillBtn = document.getElementById('printBill');
const bulkProductSelect = document.getElementById('bulkProduct');
const addBulkItemBtn = document.getElementById('addBulkItem');
const bulkItemsList = document.getElementById('bulkItemsList');
const bulkTotalElement = document.getElementById('bulkTotal');
const bulkAdvanceDisplay = document.getElementById('bulkAdvanceDisplay');
const bulkBalanceElement = document.getElementById('bulkBalance');
const bulkOrderForm = document.getElementById('bulkOrderForm');
const bulkOrdersList = document.getElementById('bulkOrdersList');
const salesReport = document.getElementById('salesReport');
const reportDate = document.getElementById('reportDate');
const recentUpdates = document.getElementById('recentUpdates');
const statusIndicator = document.getElementById('statusIndicator');
const statusText = document.getElementById('statusText');
const toggleStatusBtn = document.getElementById('toggleStatusBtn');
const settingsForm = document.getElementById('settingsForm');
const shopPhone = document.getElementById('shopPhone');
const shopHours = document.getElementById('shopHours');
const shopAddress = document.getElementById('shopAddress');
const shopContact = document.getElementById('shopContact');
const footerPhone = document.getElementById('footerPhone');
const footerHours = document.getElementById('footerHours');
const notification = document.getElementById('notification');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const resetMessage = document.getElementById('resetMessage');
const proceedToPayment = document.getElementById('proceedToPayment');
const guestProceedToPayment = document.getElementById('guestProceedToPayment');
const confirmPayment = document.getElementById('confirmPayment');
const backToCart = document.getElementById('backToCart');
const paymentOrderSummary = document.getElementById('paymentOrderSummary');
const closeWebsiteBtn = document.getElementById('closeWebsiteBtn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    updateCartDisplay();
    populateProductSelects();
    setCurrentDate();
    generateSalesReport();
    loadRecentUpdates();
    updateShopStatusDisplay();
    loadShopSettings();
    
    // Set up event listeners
    setupEventListeners();
});

// Set up all event listeners
function setupEventListeners() {
    // Modal open buttons
    customerLoginBtn.addEventListener('click', () => customerModal.style.display = 'flex');
    ownerLoginBtn.addEventListener('click', () => ownerModal.style.display = 'flex');
    shopNowBtn.addEventListener('click', () => customerModal.style.display = 'flex');
    
    // Modal close buttons
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            customerModal.style.display = 'none';
            ownerModal.style.display = 'none';
            forgotPasswordModal.style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === customerModal) {
            customerModal.style.display = 'none';
        }
        if (event.target === ownerModal) {
            ownerModal.style.display = 'none';
        }
        if (event.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });
    
    // Modal tabs
    modalTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab
            modalTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabId + 'Tab').classList.add('active');
        });
    });
    
    // Dashboard tabs
    dashboardTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab
            dashboardTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding content
            dashboardContents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabId + 'Tab').classList.add('active');
            
            // Load specific content for some tabs
            if (tabId === 'reports') {
                generateSalesReport();
                loadRecentUpdates();
            } else if (tabId === 'bulk') {
                loadBulkOrders();
            }
        });
    });
    
    // Forms
    document.getElementById('customerLoginForm').addEventListener('submit', handleCustomerLogin);
    document.getElementById('customerRegisterForm').addEventListener('submit', handleCustomerRegister);
    document.getElementById('ownerLoginForm').addEventListener('submit', handleOwnerLogin);
    productForm.addEventListener('submit', handleProductSubmit);
    cancelEditBtn.addEventListener('click', cancelEdit);
    addBillItemBtn.addEventListener('click', addBillItem);
    addBulkItemBtn.addEventListener('click', addBulkItem);
    bulkOrderForm.addEventListener('submit', handleBulkOrderSubmit);
    printBillBtn.addEventListener('click', printBill);
    toggleStatusBtn.addEventListener('click', toggleShopStatus);
    settingsForm.addEventListener('submit', handleSettingsSubmit);
    document.getElementById('customerBulkOrderForm').addEventListener('submit', handleCustomerBulkOrder);
    
    // Forgot password
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        customerModal.style.display = 'none';
        forgotPasswordModal.style.display = 'flex';
    });
    
    forgotPasswordForm.addEventListener('submit', handleForgotPassword);
    
    // Payment functionality
    proceedToPayment.addEventListener('click', showPaymentPage);
    guestProceedToPayment.addEventListener('click', showPaymentPage);
    confirmPayment.addEventListener('click', handlePayment);
    backToCart.addEventListener('click', hidePaymentPage);
    
    // Payment method selection
    document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
        radio.addEventListener('change', function() {
            document.getElementById('upiDetails').style.display = this.value === 'upi' ? 'block' : 'none';
            document.getElementById('codDetails').style.display = this.value === 'cod' ? 'block' : 'none';
        });
    });
    
    // Password toggle functionality
    document.getElementById('toggleLoginPassword').addEventListener('click', function() {
        togglePassword('loginPassword', this);
    });

    document.getElementById('toggleRegPassword').addEventListener('click', function() {
        togglePassword('regPassword', this);
    });

    document.getElementById('toggleOwnerPassword').addEventListener('click', function() {
        togglePassword('ownerPassword', this);
    });

    document.getElementById('toggleSecretKey').addEventListener('click', function() {
        togglePassword('secretKey', this);
    });
    
    // Close website button
    closeWebsiteBtn.addEventListener('click', closeWebsite);
    
    // Update bulk order calculations
    document.getElementById('bulkAdvance').addEventListener('input', updateBulkOrderCalculations);
}

// Password toggle function
function togglePassword(passwordId, toggleElement) {
    const passwordInput = document.getElementById(passwordId);
    const icon = toggleElement.querySelector('i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        icon.className = 'fas fa-eye';
    }
}

// Close website function
function closeWebsite() {
    if (confirm('Are you sure you want to close the website? This will log you out and clear all data.')) {
        // Clear all data
        appData.currentCustomer = null;
        appData.cart = [];
        
        // Hide all dashboards and modals
        ownerDashboard.style.display = 'none';
        customerDashboard.style.display = 'none';
        customerModal.style.display = 'none';
        ownerModal.style.display = 'none';
        forgotPasswordModal.style.display = 'none';
        paymentPage.style.display = 'none';
        
        // Show main website sections
        document.querySelector('header').style.display = 'block';
        document.querySelector('.hero').style.display = 'block';
        document.querySelector('#products').style.display = 'block';
        document.querySelector('#cart').style.display = 'block';
        document.querySelector('footer').style.display = 'block';
        
        // Hide close website button
        closeWebsiteBtn.style.display = 'none';
        
        // Reset cart
        updateCartDisplay();
        
        showNotification('logout successfully!');
    }
}

// Display products on the customer page
function displayProducts() {
    productsContainer.innerHTML = '';
    customerProductsContainer.innerHTML = '';
    
    appData.products.forEach(product => {
        const productCard = createProductCard(product, false);
        productsContainer.appendChild(productCard);
        
        const customerProductCard = createProductCard(product, true);
        customerProductsContainer.appendChild(customerProductCard);
    });
}

// Create product card element
function createProductCard(product, isCustomerDashboard) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-meta">
                <span>${product.category}</span>
                <span>Stock: ${product.stock} kg</span>
            </div>
            <div class="product-price">₹${product.price}/kg</div>
            <div class="product-actions">
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="decreaseQuantity(${product.id}, ${isCustomerDashboard})">-</button>
                    <input type="text" class="quantity-input" id="qty-${product.id}-${isCustomerDashboard}" value="1" readonly>
                    <button class="quantity-btn" onclick="increaseQuantity(${product.id}, ${isCustomerDashboard})">+</button>
                </div>
                <button class="btn btn-primary" onclick="addToCart(${product.id}, ${isCustomerDashboard})">Add to Cart</button>
            </div>
        </div>
    `;
    return productCard;
}

// Display products in owner dashboard
function displayOwnerProducts() {
    ownerProductsList.innerHTML = '';
    
    appData.products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-card';
        productItem.innerHTML = `
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-meta">
                    <span>${product.category}</span>
                    <span>Stock: ${product.stock} kg</span>
                </div>
                <div class="product-price">₹${product.price}/kg</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="editProduct(${product.id})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
                </div>
            </div>
        `;
        ownerProductsList.appendChild(productItem);
    });
}

// Populate product selects in billing and bulk order forms
function populateProductSelects() {
    billProductSelect.innerHTML = '';
    bulkProductSelect.innerHTML = '';
    
    appData.products.forEach(product => {
        const option1 = document.createElement('option');
        option1.value = product.id;
        option1.textContent = `${product.name} - ₹${product.price}/kg`;
        billProductSelect.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = product.id;
        option2.textContent = `${product.name} - ₹${product.price}/kg`;
        bulkProductSelect.appendChild(option2);
    });
}

// Cart functionality
function addToCart(productId, isCustomerDashboard) {
    const product = appData.products.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById(`qty-${productId}-${isCustomerDashboard}`).value);
    
    if (!product) return;
    
    const existingItem = appData.cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        appData.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.image
        });
    }
    
    updateCartDisplay();
    showNotification(`${quantity} kg of ${product.name} added to cart!`);
}

function increaseQuantity(productId, isCustomerDashboard) {
    const input = document.getElementById(`qty-${productId}-${isCustomerDashboard}`);
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(productId, isCustomerDashboard) {
    const input = document.getElementById(`qty-${productId}-${isCustomerDashboard}`);
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    customerCartItems.innerHTML = '';
    
    if (appData.cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        customerCartItems.innerHTML = '<p>Your cart is empty</p>';
        subtotalElement.textContent = '₹0.00';
        deliveryChargeElement.textContent = '₹0.00';
        totalAmountElement.textContent = '₹0.00';
        customerSubtotal.textContent = '₹0.00';
        customerDeliveryCharge.textContent = '₹0.00';
        customerTotalAmount.textContent = '₹0.00';
        loyaltyDiscount.textContent = '₹0.00';
        return;
    }
    
    let subtotal = 0;
    
    appData.cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const cartItem = createCartItem(item, false);
        cartItemsContainer.appendChild(cartItem);
        
        const customerCartItem = createCartItem(item, true);
        customerCartItems.appendChild(customerCartItem);
    });
    
    const deliveryCharge = subtotal > 500 ? 0 : 50;
    const discount = appData.currentCustomer ? calculateLoyaltyDiscount(subtotal) : 0;
    const total = subtotal + deliveryCharge - discount;
    
    subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
    deliveryChargeElement.textContent = `₹${deliveryCharge.toFixed(2)}`;
    totalAmountElement.textContent = `₹${total.toFixed(2)}`;
    
    customerSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
    customerDeliveryCharge.textContent = `₹${deliveryCharge.toFixed(2)}`;
    loyaltyDiscount.textContent = `₹${discount.toFixed(2)}`;
    customerTotalAmount.textContent = `₹${total.toFixed(2)}`;
}

function createCartItem(item, isCustomerDashboard) {
    const itemTotal = item.price * item.quantity;
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <div>
            <h4>${item.name}</h4>
            <p>₹${item.price}/kg × ${item.quantity} kg</p>
        </div>
        <div>
            <strong>₹${itemTotal.toFixed(2)}</strong>
            <button class="btn btn-outline" onclick="removeFromCart(${item.id}, ${isCustomerDashboard})" style="margin-left: 10px;">Remove</button>
        </div>
    `;
    return cartItem;
}

function removeFromCart(productId, isCustomerDashboard) {
    appData.cart = appData.cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function calculateLoyaltyDiscount(subtotal) {
    // 5% discount for regular customers
    return subtotal * 0.05;
}

// Form handlers
function handleCustomerLogin(e) {
    e.preventDefault();
    const mobile = document.getElementById('loginMobile').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation - in a real app, this would check against a database
    const customer = appData.customers.find(c => c.mobile === mobile && c.password === password);
    
    if (customer) {
        appData.currentCustomer = customer;
        showNotification('Login successful!');
        customerModal.style.display = 'none';
        customerDashboard.style.display = 'block';
        document.querySelector('#products').style.display = 'none';
        document.querySelector('#cart').style.display = 'none';
        
        // Update customer info
        customerName.textContent = customer.name;
        loyaltyPoints.textContent = customer.loyaltyPoints || 0;
        
        // Show close website button
        closeWebsiteBtn.style.display = 'inline-block';
    } else {
        showNotification('Invalid mobile number or password', true);
    }
}

function handleCustomerRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const city = document.getElementById('regCity').value;
    const mobile = document.getElementById('regMobile').value;
    const password = document.getElementById('regPassword').value;
    
    if (name && city && mobile && password) {
        // Check if customer already exists
        if (appData.customers.some(c => c.mobile === mobile)) {
            showNotification('Customer with this mobile number already exists', true);
            return;
        }
        
        // Create new customer
        const newCustomer = {
            id: appData.customers.length + 1,
            name,
            city,
            mobile,
            password,
            loyaltyPoints: 0,
            registrationDate: new Date().toISOString()
        };
        
        appData.customers.push(newCustomer);
        appData.currentCustomer = newCustomer;
        
        showNotification('Account created successfully!');
        
        // Switch to customer dashboard
        customerModal.style.display = 'none';
        customerDashboard.style.display = 'block';
        document.querySelector('#products').style.display = 'none';
        document.querySelector('#cart').style.display = 'none';
        
        // Update customer info
        customerName.textContent = name;
        loyaltyPoints.textContent = '0';
        
        // Show close website button
        closeWebsiteBtn.style.display = 'inline-block';
        
        // Add update record
        addUpdate(`New customer registered: ${name}`);
    } else {
        showNotification('Please fill all fields', true);
    }
}

function handleForgotPassword(e) {
    e.preventDefault();
    const mobile = document.getElementById('resetMobile').value;
    
    // Check if customer exists
    const customer = appData.customers.find(c => c.mobile === mobile);
    
    if (customer) {
        resetMessage.innerHTML = `<p style="color: var(--primary);">Password reset instructions sent to your mobile number.</p>`;
        resetMessage.style.display = 'block';
        
        // In a real app, you would send a reset link or code to the user's mobile
        setTimeout(() => {
            forgotPasswordModal.style.display = 'none';
            customerModal.style.display = 'flex';
            resetMessage.style.display = 'none';
            forgotPasswordForm.reset();
        }, 3000);
    } else {
        resetMessage.innerHTML = `<p style="color: var(--accent);">No account found with this mobile number.</p>`;
        resetMessage.style.display = 'block';
    }
}

function handleOwnerLogin(e) {
    e.preventDefault();
    const ownerId = document.getElementById('ownerId').value;
    const password = document.getElementById('ownerPassword').value;
    const secretKey = document.getElementById('secretKey').value;
    
    // Check credentials - secret key is 14082004 as requested
    if (ownerId && password && secretKey === '14082004') {
        showNotification('Owner login successful!');
        ownerModal.style.display = 'none';
        ownerDashboard.style.display = 'block';
        document.querySelector('header').style.display = 'none';
        document.querySelector('.hero').style.display = 'none';
        document.querySelector('#products').style.display = 'none';
        document.querySelector('#cart').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
        if (customerDashboard.style.display === 'block') {
            customerDashboard.style.display = 'none';
        }
        
        // Show close website button
        closeWebsiteBtn.style.display = 'inline-block';
        
        displayOwnerProducts();
        loadBulkOrders();
    } else {
        showNotification('Invalid credentials or secret key', true);
    }
}

function handleProductSubmit(e) {
    e.preventDefault();
    const productId = document.getElementById('productId').value;
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const category = document.getElementById('productCategory').value;
    const stock = parseInt(document.getElementById('productStock').value);
    const image = document.getElementById('productImage').value || 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60';
    
    if (productId) {
        // Update existing product
        const product = appData.products.find(p => p.id == productId);
        if (product) {
            const oldPrice = product.price;
            product.name = name;
            product.price = price;
            product.category = category;
            product.stock = stock;
            product.image = image;
            
            // Add update record if price changed
            if (oldPrice !== price) {
                addUpdate(`Price updated for ${name}: ₹${oldPrice} → ₹${price}`);
            }
            
            showNotification('Product updated successfully!');
        }
    } else {
        // Add new product
        const newId = appData.products.length > 0 ? Math.max(...appData.products.map(p => p.id)) + 1 : 1;
        
        appData.products.push({
            id: newId,
            name,
            price,
            category,
            stock,
            image
        });
        
        // Add update record
        addUpdate(`New product added: ${name} at ₹${price}/kg`);
        
        showNotification('Product added successfully!');
    }
    
    // Reset form
    productForm.reset();
    document.getElementById('productId').value = '';
    productSubmitBtn.textContent = 'Add Product';
    cancelEditBtn.style.display = 'none';
    
    // Update displays
    displayProducts();
    displayOwnerProducts();
    populateProductSelects();
}

function editProduct(productId) {
    const product = appData.products.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productStock').value = product.stock;
    document.getElementById('productImage').value = product.image;
    
    productSubmitBtn.textContent = 'Update Product';
    cancelEditBtn.style.display = 'inline-block';
    
    // Scroll to form
    document.getElementById('productForm').scrollIntoView({ behavior: 'smooth' });
}

function cancelEdit() {
    productForm.reset();
    document.getElementById('productId').value = '';
    productSubmitBtn.textContent = 'Add Product';
    cancelEditBtn.style.display = 'none';
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        const index = appData.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            const productName = appData.products[index].name;
            appData.products.splice(index, 1);
            displayProducts();
            displayOwnerProducts();
            populateProductSelects();
            
            // Add update record
            addUpdate(`Product deleted: ${productName}`);
            
            showNotification('Product deleted successfully!');
        }
    }
}

// Billing functionality
function addBillItem() {
    const productId = parseInt(billProductSelect.value);
    const quantity = parseFloat(document.getElementById('billQuantity').value);
    
    const product = appData.products.find(p => p.id === productId);
    if (!product) return;
    
    const itemTotal = product.price * quantity;
    
    appData.billItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        total: itemTotal
    });
    
    updateBillDisplay();
    document.getElementById('billQuantity').value = '1';
}

function updateBillDisplay() {
    billItemsContainer.innerHTML = '';
    
    let subtotal = 0;
    
    appData.billItems.forEach(item => {
        subtotal += item.total;
        
        const billItem = document.createElement('div');
        billItem.className = 'bill-details';
        billItem.innerHTML = `
            <div>${item.name}</div>
            <div>${item.quantity}</div>
            <div>₹${item.price}</div>
            <div>₹${item.total.toFixed(2)}</div>
        `;
        billItemsContainer.appendChild(billItem);
    });
    
    const tax = subtotal * 0.05;
    const total = subtotal + tax;
    
    billSubtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
    billTaxElement.textContent = `₹${tax.toFixed(2)}`;
    billTotalElement.textContent = `₹${total.toFixed(2)}`;
}

function printBill() {
    const billPreview = document.getElementById('billPreview');
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Fresh Farm - Bill</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .bill-header { text-align: center; margin-bottom: 20px; }
                .bill-details { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 10px; margin-bottom: 10px; }
                .bill-footer { border-top: 2px solid #ddd; padding-top: 10px; margin-top: 20px; }
                .summary-row { display: flex; justify-content: space-between; margin-bottom: 5px; }
                .summary-total { font-weight: bold; border-top: 1px solid #ddd; padding-top: 5px; }
                .qr-code { text-align: center; margin: 20px 0; }
                .qr-code img { max-width: 150px; }
            </style>
        </head>
        <body>
            ${billPreview.innerHTML}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Bulk order functionality
function addBulkItem() {
    const productId = parseInt(bulkProductSelect.value);
    const quantity = parseFloat(document.getElementById('bulkQuantity').value);
    
    const product = appData.products.find(p => p.id === productId);
    if (!product) return;
    
    const itemTotal = product.price * quantity;
    
    appData.bulkOrderItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        total: itemTotal
    });
    
    updateBulkOrderDisplay();
    document.getElementById('bulkQuantity').value = '1';
}

function updateBulkOrderDisplay() {
    bulkItemsList.innerHTML = '';
    
    let total = 0;
    
    appData.bulkOrderItems.forEach(item => {
        total += item.total;
        
        const bulkItem = document.createElement('div');
        bulkItem.className = 'cart-item';
        bulkItem.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>₹${item.price}/kg × ${item.quantity} kg</p>
            </div>
            <div>
                <strong>₹${item.total.toFixed(2)}</strong>
                <button class="btn btn-outline" onclick="removeBulkItem(${item.id})" style="margin-left: 10px;">Remove</button>
            </div>
        `;
        bulkItemsList.appendChild(bulkItem);
    });
    
    updateBulkOrderCalculations();
}

function removeBulkItem(productId) {
    appData.bulkOrderItems = appData.bulkOrderItems.filter(item => item.id !== productId);
    updateBulkOrderDisplay();
}

function updateBulkOrderCalculations() {
    const total = appData.bulkOrderItems.reduce((sum, item) => sum + item.total, 0);
    const advance = parseFloat(document.getElementById('bulkAdvance').value) || 0;
    const balance = total - advance;
    
    bulkTotalElement.textContent = `₹${total.toFixed(2)}`;
    bulkAdvanceDisplay.textContent = `₹${advance.toFixed(2)}`;
    bulkBalanceElement.textContent = `₹${balance.toFixed(2)}`;
}

function handleBulkOrderSubmit(e) {
    e.preventDefault();
    const customer = document.getElementById('bulkCustomer').value;
    const event = document.getElementById('bulkEvent').value;
    const date = document.getElementById('bulkDate').value;
    const advance = parseFloat(document.getElementById('bulkAdvance').value) || 0;
    
    if (appData.bulkOrderItems.length === 0) {
        showNotification('Please add at least one item to the bulk order', true);
        return;
    }
    
    const total = appData.bulkOrderItems.reduce((sum, item) => sum + item.total, 0);
    const balance = total - advance;
    
    // Create bulk order
    const bulkOrder = {
        id: appData.bulkOrders.length + 1,
        customer,
        event,
        date,
        items: [...appData.bulkOrderItems],
        total,
        advance,
        balance,
        status: 'pending',
        created: new Date().toISOString()
    };
    
    appData.bulkOrders.push(bulkOrder);
    
    // Add update record
    addUpdate(`New bulk order received: ${event} for ${customer}`);
    
    showNotification(`Bulk order saved for ${customer}!\nEvent: ${event}\nDelivery Date: ${date}\nTotal: ₹${total.toFixed(2)}\nAdvance: ₹${advance.toFixed(2)}\nBalance: ₹${balance.toFixed(2)}`);
    
    // Reset form
    bulkOrderForm.reset();
    appData.bulkOrderItems = [];
    updateBulkOrderDisplay();
    
    // Reload bulk orders list
    loadBulkOrders();
}

function handleCustomerBulkOrder(e) {
    e.preventDefault();
    const date = document.getElementById('bulkOrderDate').value;
    const type = document.getElementById('bulkOrderType').value;
    const notes = document.getElementById('bulkOrderNotes').value;
    
    if (!appData.currentCustomer) {
        showNotification('Please login to place a bulk order', true);
        return;
    }
    
    // Create customer bulk order request
    const bulkOrderRequest = {
        id: appData.bulkOrders.length + 1,
        customer: appData.currentCustomer.name,
        customerId: appData.currentCustomer.id,
        event: type,
        date,
        notes,
        status: 'requested',
        created: new Date().toISOString()
    };
    
    appData.bulkOrders.push(bulkOrderRequest);
    
    // Add update record
    addUpdate(`Bulk order request from ${appData.currentCustomer.name}: ${type} on ${date}`);
    
    showNotification('Bulk order request submitted successfully! We will contact you soon.');
    
    // Reset form
    e.target.reset();
    
    // Reload bulk orders list in owner dashboard
    if (ownerDashboard.style.display === 'block') {
        loadBulkOrders();
    }
}

function loadBulkOrders() {
    bulkOrdersList.innerHTML = '';
    
    if (appData.bulkOrders.length === 0) {
        bulkOrdersList.innerHTML = '<p>No bulk orders yet.</p>';
        return;
    }
    
    appData.bulkOrders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.className = 'product-card';
        orderItem.innerHTML = `
            <div class="product-info">
                <h3 class="product-name">${order.event} - ${order.customer}</h3>
                <div class="product-meta">
                    <span>Delivery: ${order.date}</span>
                    <span>Status: ${order.status}</span>
                </div>
                ${order.total ? `
                <div class="product-price">Total: ₹${order.total.toFixed(2)}</div>
                <div class="product-meta">
                    <span>Advance: ₹${order.advance.toFixed(2)}</span>
                    <span>Balance: ₹${order.balance.toFixed(2)}</span>
                </div>
                ` : ''}
                ${order.notes ? `<p>Notes: ${order.notes}</p>` : ''}
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="updateBulkOrderStatus(${order.id}, 'confirmed')">Confirm</button>
                    <button class="btn btn-danger" onclick="updateBulkOrderStatus(${order.id}, 'cancelled')">Cancel</button>
                </div>
            </div>
        `;
        bulkOrdersList.appendChild(orderItem);
    });
}

function updateBulkOrderStatus(orderId, status) {
    const order = appData.bulkOrders.find(o => o.id === orderId);
    if (order) {
        order.status = status;
        
        // Add update record
        addUpdate(`Bulk order status updated: ${order.event} for ${order.customer} → ${status}`);
        
        showNotification(`Order status updated to ${status}`);
        loadBulkOrders();
    }
}

// Sales report
function generateSalesReport() {
    // In a real app, this would fetch data from a database
    const today = new Date();
    const todayString = today.toLocaleDateString();
    reportDate.textContent = todayString;
    
    const totalSales = 12540;
    const totalOrders = 23;
    const popularProducts = [
        { name: 'Fresh Tomatoes', quantity: 45, revenue: 1800 },
        { name: 'Organic Apples', quantity: 32, revenue: 3840 },
        { name: 'Green Cucumbers', quantity: 28, revenue: 840 }
    ];
    
    let reportHTML = `
        <p><strong>Date:</strong> ${todayString}</p>
        <p><strong>Total Sales:</strong> ₹${totalSales.toFixed(2)}</p>
        <p><strong>Total Orders:</strong> ${totalOrders}</p>
        <h5>Popular Products</h5>
        <ul>
    `;
    
    popularProducts.forEach(product => {
        reportHTML += `
            <li>${product.name} - ${product.quantity} kg - ₹${product.revenue}</li>
        `;
    });
    
    reportHTML += `</ul>`;
    
    salesReport.innerHTML = reportHTML;
}

function loadRecentUpdates() {
    recentUpdates.innerHTML = '';
    
    if (appData.updates.length === 0) {
        recentUpdates.innerHTML = '<p>No recent updates.</p>';
        return;
    }
    
    const recent = appData.updates.slice(-5).reverse();
    
    recent.forEach(update => {
        const updateItem = document.createElement('div');
        updateItem.className = 'product-card';
        updateItem.innerHTML = `
            <div class="product-info">
                <p>${update.text}</p>
                <div class="product-meta">
                    <span>${new Date(update.timestamp).toLocaleString()}</span>
                </div>
            </div>
        `;
        recentUpdates.appendChild(updateItem);
    });
}

function addUpdate(text) {
    appData.updates.push({
        text,
        timestamp: new Date().toISOString()
    });
    
    // Keep only last 20 updates
    if (appData.updates.length > 20) {
        appData.updates = appData.updates.slice(-20);
    }
}

// Shop status
function toggleShopStatus() {
    appData.shopStatus = appData.shopStatus === 'open' ? 'closed' : 'open';
    updateShopStatusDisplay();
    
    // Add update record
    addUpdate(`Shop status changed to: ${appData.shopStatus}`);
    
    showNotification(`Shop is now ${appData.shopStatus}`);
}

function updateShopStatusDisplay() {
    if (appData.shopStatus === 'open') {
        statusIndicator.className = 'status-indicator status-open';
        statusText.textContent = 'Open';
        toggleStatusBtn.textContent = 'Close Shop';
        toggleStatusBtn.className = 'btn btn-danger';
    } else {
        statusIndicator.className = 'status-indicator status-closed';
        statusText.textContent = 'Closed';
        toggleStatusBtn.textContent = 'Open Shop';
        toggleStatusBtn.className = 'btn btn-success';
    }
}

// Shop settings
function loadShopSettings() {
    shopPhone.value = appData.shopSettings.phone;
    shopHours.value = appData.shopSettings.hours;
    shopAddress.value = appData.shopSettings.address;
    shopContact.textContent = appData.shopSettings.phone;
    footerPhone.textContent = appData.shopSettings.phone;
    footerHours.textContent = appData.shopSettings.hours;
}

function handleSettingsSubmit(e) {
    e.preventDefault();
    appData.shopSettings.phone = shopPhone.value;
    appData.shopSettings.hours = shopHours.value;
    appData.shopSettings.address = shopAddress.value;
    
    // Update displayed values
    shopContact.textContent = appData.shopSettings.phone;
    footerPhone.textContent = appData.shopSettings.phone;
    footerHours.textContent = appData.shopSettings.hours;
    
    // Add update record
    addUpdate('Shop settings updated');
    
    showNotification('Shop settings saved successfully!');
}

// Payment functionality
function showPaymentPage() {
    if (appData.cart.length === 0) {
        showNotification('Your cart is empty. Add some products first.', true);
        return;
    }
    
    // Hide other sections
    document.querySelector('#products').style.display = 'none';
    document.querySelector('#cart').style.display = 'none';
    if (customerDashboard.style.display === 'block') {
        customerDashboard.style.display = 'none';
    }
    
    // Show payment page
    paymentPage.style.display = 'block';
    
    // Update order summary
    updatePaymentOrderSummary();
}

function hidePaymentPage() {
    paymentPage.style.display = 'none';
    
    // Show appropriate sections
    if (customerDashboard.style.display === 'block') {
        customerDashboard.style.display = 'block';
    } else {
        document.querySelector('#products').style.display = 'block';
        document.querySelector('#cart').style.display = 'block';
    }
}

function updatePaymentOrderSummary() {
    let subtotal = 0;
    let summaryHTML = '';
    
    appData.cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        summaryHTML += `
            <div class="summary-row">
                <span>${item.name} (${item.quantity} kg)</span>
                <span>₹${itemTotal.toFixed(2)}</span>
            </div>
        `;
    });
    
    const deliveryCharge = subtotal > 500 ? 0 : 50;
    const discount = appData.currentCustomer ? calculateLoyaltyDiscount(subtotal) : 0;
    const total = subtotal + deliveryCharge - discount;
    
    summaryHTML += `
        <div class="summary-row">
            <span>Subtotal:</span>
            <span>₹${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Delivery Charge:</span>
            <span>₹${deliveryCharge.toFixed(2)}</span>
        </div>
    `;
    
    if (discount > 0) {
        summaryHTML += `
            <div class="summary-row">
                <span>Loyalty Discount:</span>
                <span>₹${discount.toFixed(2)}</span>
            </div>
        `;
    }
    
    summaryHTML += `
        <div class="summary-row summary-total">
            <span>Total:</span>
            <span>₹${total.toFixed(2)}</span>
        </div>
    `;
    
    paymentOrderSummary.innerHTML = summaryHTML;
}

// FIXED: handlePayment function - Now stays in customer dashboard after payment
function handlePayment() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    // Calculate total for points
    let subtotal = appData.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryCharge = subtotal > 500 ? 0 : 50;
    const discount = appData.currentCustomer ? calculateLoyaltyDiscount(subtotal) : 0;
    const total = subtotal + deliveryCharge - discount;
    
    // UPDATE LOYALTY POINTS - 1 point per ₹100 spent
    if (appData.currentCustomer) {
        const pointsEarned = Math.floor(total / 100);
        appData.currentCustomer.loyaltyPoints = (appData.currentCustomer.loyaltyPoints || 0) + pointsEarned;
        
        // Update display
        loyaltyPoints.textContent = appData.currentCustomer.loyaltyPoints;
        
        // Update in customers array
        const customerIndex = appData.customers.findIndex(c => c.id === appData.currentCustomer.id);
        if (customerIndex !== -1) {
            appData.customers[customerIndex].loyaltyPoints = appData.currentCustomer.loyaltyPoints;
        }
        
        if (pointsEarned > 0) {
            showNotification(`You earned ${pointsEarned} loyalty points! Total: ${appData.currentCustomer.loyaltyPoints} points`);
        }
    }
    
    if (paymentMethod === 'upi') {
        showNotification('Please complete the UPI payment to confirm your order.');
    } else {
        showNotification('Your order has been placed successfully! You will pay when your order is delivered.');
    }
    
    // Clear cart after successful payment
    appData.cart = [];
    updateCartDisplay();
    
    // FIXED: Always return to customer dashboard if customer is logged in
    setTimeout(() => {
        hidePaymentPage();
        if (appData.currentCustomer) {
            // Stay in customer dashboard to see loyalty points
            customerDashboard.style.display = 'block';
            document.querySelector('#products').style.display = 'none';
            document.querySelector('#cart').style.display = 'none';
        } else {
            // Guest users go back to products page
            document.querySelector('#products').style.display = 'block';
            document.querySelector('#cart').style.display = 'block';
        }
    }, 3000);
}

// Utility functions
function setCurrentDate() {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString();
    document.getElementById('billDate').textContent = dateString;
    document.getElementById('billTime').textContent = timeString;
    
    // Set bulk order date to tomorrow by default
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('bulkDate').valueAsDate = tomorrow;
    document.getElementById('bulkOrderDate').valueAsDate = tomorrow;
}

function showNotification(message, isError = false) {
    notification.textContent = message;
    notification.style.background = isError ? 'var(--accent)' : 'var(--primary)';
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
