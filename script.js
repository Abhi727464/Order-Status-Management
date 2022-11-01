const executeOrder = () => {
    let orderId = document.getElementById("input-id").value;
    document.getElementById("order-id").innerHTML = `<b>Order Id- ${orderId}</b>`;
    document.getElementById("input-id").value = "";
    document.getElementById("order-id").style.display = "block";
    let orderStatus = document.getElementsByClassName("order-status-block");
    orderStatus[0].classList.replace("btn-light", "btn-success");
  
    let recievedOrder = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          orderStatus[1].classList.replace("btn-light", "btn-success");
          resolve();
        }, 3000);
      });
    let preparedOrder = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          orderStatus[2].classList.replace("btn-light", "btn-success");
          resolve();
        }, 4000);
      });
    let assigned = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          orderStatus[3].classList.replace("btn-light", "btn-success");
          resolve();
        }, 5000);
      });
    let wayToHotel = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          orderStatus[4].classList.replace("btn-light", "btn-success");
          resolve();
        }, 6000);
      });
      let orderPicked = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          orderStatus[5].classList.replace("btn-light", "btn-success");
          resolve();
        }, 3000);
      });
      let wayToHouse = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          orderStatus[6].classList.replace("btn-light", "btn-success");
          resolve();
        }, 4000);
      });
  
  
    // const placeOrder = () => {
    //     console.log('Order placed');
    //     recievedOrder().then(() => {
    //         return preparedOrder();
    //     }).then(() => {
    //         return assigned();
    //     }).then(() => {
    //         return wayToHotel();
    //     }).then(() => {
    //         console.log('Order delievered successfully')
    //     })
  
    // }
  
      console.log("Order placed");
      recievedOrder()
        .then(preparedOrder)
        .then(assigned)
        .then(wayToHotel)
        .then(orderPicked)
        .then(wayToHouse)
        .then(() => {
          orderStatus[7].classList.replace("btn-light", "btn-success");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
  