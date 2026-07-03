

const PopularProducts = async () => {

    const res = await fetch('');
    const data = await res.json();
    
    console.log(data);

    return (
        <div>
            
        </div>
    );
};

export default PopularProducts;