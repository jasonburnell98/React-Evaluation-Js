// function to check if ip address is valid or not using regex expression
export const validateIPaddress = (value) => {
  const ipFormat =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if (value.match(ipFormat)) {
    return true;
  } else {
    alert("You have entered an invalid IP address!");
    return false;
  }
};
