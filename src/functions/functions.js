  var baseURL = "http://10.1.0.5:5002/api/"


/**
 * Retorna lista de Projetos.
 * @customfunction Projetos
 * @param {string} [posicao] V = Vertical, H = Horizontal.
 * @returns {string[][]} Lista de Projetos.
 */
export async function Projetos(posicao){
  const url = baseURL+"Projeto?posicao="+posicao;
  const data = await http(url);
    return data;
}


/**
 * Add two numbers
 * @customfunction 
 * @param {number} first First number
 * @param {number} second Second number
 * @returns {number} The sum of the two numbers.
 */
function add(first, second) {
  return first + second;
}

/**
 * Displays the current time once a second
 * @customfunction 
 * @param {CustomFunctions.StreamingInvocation<string>} invocation Custom function invocation
 */
function clock(invocation) {
  const timer = setInterval(() => {
    const time = currentTime();
    invocation.setResult(time);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Returns the current time
 * @returns {string} String with the current time formatted for the current locale.
 */
function currentTime() {
  return new Date().toLocaleTimeString();
}

/**
 * Increments a value once a second.
 * @customfunction 
 * @param {number} incrementBy Amount to increment
 * @param {CustomFunctions.StreamingInvocation<number>} invocation
 */
function increment(incrementBy, invocation) {
  let result = 0;
  const timer = setInterval(() => {
    result += incrementBy;
    invocation.setResult(result);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Writes a message to console.log().
 * @customfunction LOG
 * @param {string} message String to write.
 * @returns String to write.
 */
function logMessage(message) {
  console.log(message);

  return message;
}

/**
 * Versao
 * @customfunction Versao
 * @returns {string[][]}Retorna Versao Atual
 */
export async function Versao() {
 //You can change this URL to any web request you want to work with.
 const url = baseURL+"Projeto/Version";
 const data = await http(url);
return data;
}

export async function http(request) {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}