const list = document.getElementById("list");

// const countryListbtn = document.getElementById("countryListbtn");
// const btnbtnCapricorn = document.getElementById("btnCapricorn");

const allBtns = document.querySelectorAll(".btn")

for (let i = 0; i < allBtns.length; i++){
    allBtns[i].addEventListener("click", (e) => {
        switch (e.target.innerHTML) {
            case "Country List":
                list.innerHTML = ""
                const countries = randomPersonData.map(item => item.region)
    console.log(countries)
    countries.sort().map(item => {
       const newListItemCountery = document.createElement("li");
       newListItemCountery.innerHTML = item;
       list.appendChild(newListItemCountery)
    })
                break;
                case "Capricorn woman exercise":
                    list.innerHTML = ""
                    randomPersonData.map(item => {
                        const newLi = document.createElement("li");
                        const newImg = document.createElement("img");
                        newImg.src = item.photo;
                        newImg.width = 100;
                        
                        newLi.innerHTML = item.name + " " + item.surname;
                        list.appendChild(newLi);
                        list.appendChild(newImg);
                        
                     })
                     break;
                     case "Capricorn woman exercise (sort it by first name)":
                    list.innerHTML = ""
                    const newArray = randomPersonData.map(name =>  name.name + " " + name.surname + " " + `<div><img src=${name.photo} width=100 ></div>` ).sort()
                    newArray.map(item => {
                        const newLiITEM = document.createElement("li");
                        newLiITEM.innerHTML = item
                        list.appendChild(newLiITEM)
                    })
                     break;
                     case "Capricorn woman exercise (filtered only women, older then 30, Capricorn (birthday from December 22 to January 19))":
                        list.innerHTML = ""
                        const newArrayFiltered = randomPersonData.filter(item => item.gender === "female")
                        .filter(item => item.age > 30)
                            newArrayFiltered.filter(item => {
                            const xyz = item.birthday.dmy.split("/")
                            const dayNumber = xyz[0]
                            const MonthNumber = xyz[1]
                            const YearNumber = xyz[2]
                            if(dayNumber >= 22 && MonthNumber == 12 || dayNumber <= 19 && MonthNumber == 01){
                              const newitemList = document.createElement("li");
                              const newImageElement = document.createElement("img");
                              newImageElement.src = item.photo
                              newitemList.innerHTML = item.name + " " + item.surname + " " + dayNumber + " " + MonthNumber + " " +  YearNumber;
                              list.appendChild(newitemList)
                              list.appendChild(newImageElement)
                            }
                        } ) 
                        break;
                        case "Old credit cards":
                            list.innerHTML = "";
                          
                       
                        randomPersonData.sort().filter(item => {
                                const expDate = item.credit_card.expiration;
                                const array = expDate.split("/");
                                const month = array[0];
                                const year = array[1];
                                const currentYear = new Date().getFullYear();
                                const currentYearTostring = currentYear.toString();
                                const currentYearTwoNumbers = currentYearTostring.slice(2,4);
                                const currentMonth = new Date().getMonth() + 1;
                       
                                if(currentMonth === Number(month) && Number(currentYearTwoNumbers) == year || currentMonth + 1 === Number(month) && Number(currentYearTwoNumbers) == year ){
                                    const newListItem = document.createElement("li");
                                    newListItem.innerHTML = item.name + " " + item.surname + " " + "PhoneNumber :" + item.phone + " " + "Credit Card Number :" + item.credit_card.number + " " + "Credit Card expiration :" + item.credit_card.expiration
                                    
                                    list.appendChild(newListItem);
                                    console.log(item.name + " " + item.surname + " " + "PhoneNumber :" + item.phone + " " + "Credit Card Number :" + item.credit_card.number + " " + "Credit Card expiration :" + item.credit_card.expiration)
    
                                }
    
                                if(currentMonth + 1 === Number(month) && Number(currentYearTwoNumbers) == year){
                                    const newListItem = document.createElement("li");
                                    newListItem.innerHTML = item.name + " " + item.surname + " " + "PhoneNumber :" + item.phone + " " + "Credit Card Number :" + item.credit_card.number + " " + "Credit Card expiration :" + item.credit_card.expiration
                                    
                                    list.appendChild(newListItem)
                                }
                                if(currentMonth + 2 === Number(month) && Number(currentYearTwoNumbers) == year){
                                    const newListItem = document.createElement("li");
                                    newListItem.innerHTML = item.name + " " + item.surname + " " + "PhoneNumber :" + item.phone + " " + "Credit Card Number :" + item.credit_card.number + " " + "Credit Card expiration :" + item.credit_card.expiration
                                    
                                    list.appendChild(newListItem)
                                }
                            
                        if(currentMonth + 2 - 12 == Number(month) && Number(currentYearTwoNumbers) + 1 == year){
                            const newListItem = document.createElement("li");
                            newListItem.innerHTML = item.name + " " + item.surname + " " + "PhoneNumber :" + item.phone + " " + "Credit Card Number :" + item.credit_card.number + " " + "Credit Card expiration :" + item.credit_card.expiration
                            
                            list.appendChild(newListItem)
                            console.log(item.name + " " + item.surname + " " + "PhoneNumber :" + item.phone + " " + "Credit Card Number :" + item.credit_card.number + " " + "Credit Card expiration :" + item.credit_card.expiration)

                        }
                            if(currentMonth + 1 - 12 == Number(month) && Number(currentYearTwoNumbers) + 1 == year){
                                
                                const newListItem = document.createElement("li");
                               
                               
                                newListItem.innerHTML = item.name + " " + item.surname + " " + "PhoneNumber :" + item.phone + " " + "Credit Card Number :" + item.credit_card.number + " " + "Credit Card expiration :" + item.credit_card.expiration;

                                list.appendChild(newListItem);
                                console.log(item.name + " " + item.surname + " " + "PhoneNumber :" + item.phone + " " + "Credit Card Number :" + item.credit_card.number + " " + "Credit Card expiration :" + item.credit_card.expiration)
                                
                            }           
                                
                            })
                      
                         break;
                     default:
                 
        }
    })
}

// `<div><img src=${name.photo} width=100 ></div>`


// countryListbtn.addEventListener("click", () => {
//     list.innerHTML = ""
//     const countries = randomPersonData.map(item => item.region)
//     console.log(countries)
//     countries.sort().map(item => {
//        const newListItemCountery = document.createElement("li");
//        newListItemCountery.innerHTML = item;
//        list.appendChild(newListItemCountery)
//     })
  
// })


// btnbtnCapricorn.addEventListener("click", () => {
//     list.innerHTML = ""

//     const x = randomPersonData.map(name => name.name + " " + name.surname ).sort()
//     x.map(item => {
//         const newLisItem = document.createElement("li")
//         newLisItem.innerHTML = item;
//         list.appendChild(newLisItem)
//     })
//    randomPersonData.map(item => {
//         const newLi = document.createElement("li");
//         const newImg = document.createElement("img");
//         newImg.src = item.photo;
//         newImg.width = 100;
        
//         newLi.innerHTML = item.name + " " + item.surname;
//         countryList.appendChild(newLi);
//         countryList.appendChild(newImg);
        
//      }).sort()
    
//})