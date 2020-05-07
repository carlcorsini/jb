const getAll = async (payload) => {
  try {
    if (Object.values(payload).length > 0) {
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll
}
