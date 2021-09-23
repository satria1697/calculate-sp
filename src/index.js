const axios = require("axios")
const qs = require("qs")
const dayjs = require("dayjs")

const token = "" // put api-token here

axios.post("https://dashboard.refactory.id/api/maniphest.search", qs.stringify({
    "api.token": token,
    queryKey: "assigned",
    constraints: {
        statuses: ["resolved"],
        closedStart: dayjs().startOf('month').unix()
    }
}), {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
}).then(res => {
    const value = res.data.result.data.reduce((a,b) => a += Number(b.fields.points), 0)
    console.log(value)
})
