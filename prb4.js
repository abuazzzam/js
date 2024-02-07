function findAddress (obj){
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    const str = street+ "," + house + "," +society;
    return str
}
console.log(findAddress({street:"10", house:"", society: ""}))
