import StateModel from "../modal/stateModel.js";

export const stateController = async (req, res) => {
  try {
    const { state, districts } = req.body;

    const newState = new StateModel({
      state,
      districts,
    });
    await newState.save();
    res.status(200).send({
      success: true,
      message: "State Added Successfully",
      newState,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in saving the states",
      error,
    });
  }
};

export const getStateController = async (req, res) => {
  try {
    const states = await StateModel.find({});
    // console.log("States:", states); // Log retrieved states
    res.status(200).json({
      success: true,
      message: "States",
      states: states,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Error while getting states",
      error: error.message,
    });
  }
};
