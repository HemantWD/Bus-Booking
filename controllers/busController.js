import busData from "../modal/busData.js";

export const busDataController = async (req, res) => {
  try {
    const bus = await busData.find({});
    res.status(200).send({
      success: true,
      message: "Bus Data",
      bus,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting bus details",
      error,
    });
  }
};
