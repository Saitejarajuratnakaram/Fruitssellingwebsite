const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const orderSummaryDiv = document.getElementById('orderSummary');

function renderOrderSummary() {
    let total = 0;
    orderSummaryDiv.innerHTML = '<h2>Order Summary</h2>';

    cartItems.forEach(item => {
        total += item.price * item.quantity;

        // Initialize the unit variable
    let unit = '';

    // Check for 'milk' or 'jam' specifically for liters or bottles
    if (item.name.includes('milk') || 
    item.name.includes('Fortune Sunflower Oil')|| 
    item.name.includes('Saffola Gold Cooking Oil')|| 
    item.name.includes('Dalda Groundnut Oil')|| 
    item.name.includes('Nature Fresh Acti-Lite Sunflower Oil')|| 
    item.name.includes('Fortune Rice Bran Oil')|| 
    item.name.includes('Figaro Olive Oil')|| 
    item.name.includes('Emami Healthy & Tasty Mustard Oil')|| 
    item.name.includes('Patanjali Mustard Oil')|| 
    item.name.includes('Dhara Refined Soybean Oil')|| 
    item.name.includes('Oleev Extra Virgin Olive Oil')|| 
    item.name.includes('Gemini Sunflower Oil')|| 
    item.name.includes('Coco Soul Cold Pressed Virgin Coconut Oil')|| 
    item.name.includes('Soy Sauce')|| 
    item.name.includes('Aavin Toned Milk')|| 
    item.name.includes('Heritage Milk')|| 
    item.name.includes('Nestle A+ Milk')|| 
    item.name.includes('Nandini GoodLife')|| 
    item.name.includes('Mother Dairy Full Cream')|| 
    item.name.includes('Amul Taaza')|| 
    item.name.includes('Dettol Antiseptic Liquid')|| 
    item.name.includes('Lizol Floor Cleanerr')|| 
    item.name.includes('Mr. Muscle Kitchen Cleaner')|| 
    item.name.includes('Pine-Sol All-Purpose Cleaner')|| 
    item.name.includes('Colin Glass Cleaner')|| 
    item.name.includes('Mop & Glo Multi-Surface Cleaner')|| 
    item.name.includes('Surf Excel Liquid Detergent')|| 
    item.name.includes('Harpic Bathroom Cleaner')|| 
    item.name.includes('Vim Dishwash Liquid')|| 
    item.name.includes('Airwick Room Freshener Spray')|| 
    item.name.includes('Harpic Power Plus Toilet Cleaner')
 ) {
        unit = 'litres';  // This assumes milk or jam is measured in litres
    } 
    else if (
        item.name.includes('lays') || 
        item.name.includes('britannia good day butter') || 
        item.name.includes('parle-g') ||
        item.name.includes('sunfeast marie light') ||
        item.name.includes('Oreo Original') ||
        item.name.includes('Knorr Soupy Noodles') ||
        item.name.includes('Sunfeast Yippee! Noodles') ||
        item.name.includes('Quaker Oats') ||
        item.name.includes('Chings Secret Schezwan Noodles') ||
        item.name.includes('MTR Instant Upma') ||
        item.name.includes('McCain French Fries') ||
        item.name.includes('Sumeru Chicken Nuggets') ||
        item.name.includes('ITC Master Chef Frozen Aloo Tikki') ||
        item.name.includes('Godrej Yummiez Veg Burger Patty') ||
        item.name.includes('Prasuma Pork Dumplings') ||
        item.name.includes('Meatzza Frozen Chicken Sausages') ||
        item.name.includes('Cadbury Dairy Milk Silk (Plain)') ||
        item.name.includes('Cadbury Dairy Milk Fruit & Nut') ||
        item.name.includes('Cadbury Dairy Milk Roast Almond') ||
        item.name.includes('Cadbury Dairy Milk Silk Oreo') ||
        item.name.includes('Cadbury Dairy Milk Bubbly') ||
        item.name.includes('Cadbury Dairy Milk Crackle') ||
        item.name.includes('Hide & Seek Choco Chips') ||
        item.name.includes('Bourbon Chocolate Cream Biscuits') ||
        item.name.includes('Tata Tea Premium') ||
        item.name.includes('Brooke Bond Red Label') ||
        item.name.includes('Lipton Green Tea') ||
        item.name.includes('Tetley Green Tea Lemon & Honey') ||
        item.name.includes('Wagh Bakri Masala Tea') ||
        item.name.includes('Girnar Desi Chai') ||
        item.name.includes('Nescafe Classic') ||
        item.name.includes('Bru Instant Coffee') ||
        item.name.includes('Tata Coffee Grand') ||
        item.name.includes('Continental Xtra Instant Coffee') ||
        item.name.includes('Maggi Noodles') ||
        item.name.includes('Happilo Roasted Almonds') ||
        item.name.includes('Uncle Chipps Spicy Treat') ||
        item.name.includes('Too Yumm Multigrain Chips (Spicy)') ||
        item.name.includes('Sunfeast Dark Fantasy Choco Fills') ||
        item.name.includes('Balaji Wafers Salted Chips') ||
        item.name.includes('Makino Nacho Chips (Cheese)') ||
        item.name.includes('Parle Monaco Biscuits') ||
        item.name.includes('Pringles Original') ||
        item.name.includes('Bingo! Mad Angles (Masala Madness)') ||
        item.name.includes('Haldiram’s Aloo Bhujia') ||
        item.name.includes('Kurkure Masala Munch') ||
        item.name.includes('Lays Classic Salted Chips') ||
        item.name.includes('Fresho Garlic Bread') ||
        item.name.includes('English Oven Multigrain Bread') ||
        item.name.includes('Wibs White Bread') ||
        item.name.includes('Harvest Gold Brown Bread') ||
        item.name.includes('Modern Milk Bread') ||
        item.name.includes('Britannia Whole Wheat Bread') 
        
    ) {
        unit = 'packs';  // These items are typically in packs
    } 
    // Default to 'kgs' for other items
    else {
        unit = 'kgs';
    }


        orderSummaryDiv.innerHTML += `
            <div>${item.name} - ₹${item.price} x ${item.quantity} ${unit}</div>
        `;
    });

    orderSummaryDiv.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

document.getElementById('placeOrderBtn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    alert(`Order placed!\nName: ${name}\nAddress: ${address}\nPayment Method: ${paymentMethod}`);
    localStorage.removeItem('cartItems'); // Clear the cart after checkout
    window.location.href = 'cart.html'; // Redirect to cart page or homepage
});

renderOrderSummary();
