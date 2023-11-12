export const storage = {
  /**
   * Obtiene un valor desde el localStorage.
   * @param {string} key - La clave al cual quieras acceder del LocalStorage.
   * @returns {Object|null} - El valor almacenado parseado a JSON o null si no se encuentra.
   */

  get(key) {
    const value = localStorage.getItem(key);
    if (!value) return null;

    return JSON.parse(value);
  },

  /**
   * Setea un valor desde el localStorage.
   * @param {string} key - La clave al cual quieras setear en LocalStorage.
   */
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  /**
   * Elimina valor desde el localStorage.
   * @param {string} key - La clave al cual quieras Eliminar en LocalStorage.
   */
  remove(key) {
    localStorage.removeItem(key);
  },
};
export default storage;
