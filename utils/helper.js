export const getDiscountedPricePercentage = (originalPrice, discountedPrice)=>{
    const discount = originalPrice - discountedPrice;

    const discountPercenatge = (discount/originalPrice * 100)
    return discountPercenatge.toFixed(2)
}