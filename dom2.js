const alertData = {
  id: "sys-error-99",
  message: "Database connection failed",
  severity: "critical"
};

const container = document.getElementById('alerts-container')
const innerDiv = document.createElement('div')
const first = document.createElement('strong')
const second = document.createElement('span')

innerDiv.id = `${alertData.id}`
innerDiv.classList.add('alert' , alertData.severity)

first.textContent = "Alert:"
second.textContent = `${alertData.message}`

innerDiv.append(first , second)
container.append(innerDiv)