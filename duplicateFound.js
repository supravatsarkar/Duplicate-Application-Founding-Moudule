
fetch('./total.json').then(res => res.json())
    .then(data => {
        console.log('Fetch Data- ', data);
        findApplication(data?.serv, data.Sheet1);
    })

const findApplication = (bigArray, smallArray) => {
    const ApplicationList = []
    let matchCount = 0;
    bigArray?.forEach(bigArrayEl => {
        let isFound;
        smallArray?.forEach(smallArrayEl => {
            if (smallArrayEl.ApplicationId === bigArrayEl.ApplicationId) {
                isFound = true;
                matchCount++;
            }

        });
        ApplicationList.push({
            ...bigArrayEl,
            isFound: isFound
        });

    });
    // console.log('ApplicationList- ', ApplicationList);
    console.log('matchCount- ', matchCount);
    ApplicationList.forEach(app => {
        if (app.isFound !== true) {
            console.log('notFoundArrays: ', app)
            console.log('notFoundAppID: ', app.ApplicationId)
        }
    });

}

