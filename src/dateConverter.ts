export class dateConverter{

    static convertTimestampFit_ToDate(timestamp : number) : Date
    {
        return new Date(timestamp)
    }

    static getXDayForFirstConnectToApp(nbJourOffer : number) : Date
    {
        let tmp = new Date().getTime()
        tmp = tmp - (86400000 * (nbJourOffer-1))

    
        let tmpDate = dateConverter.convertTimestampFit_ToDate(tmp)
        tmpDate.setHours(0)
        tmpDate.setMinutes(0)
        tmpDate.setSeconds(0)
        tmpDate.setMilliseconds(0)

        return tmpDate
    }


    static timeToTimeMidnight(nbMillis : number) : number
    {
        let dateC = new Date(nbMillis)

        dateC.setHours(0)
        dateC.setMinutes(0)
        dateC.setSeconds(1)

        return dateC.getTime()
    }


}