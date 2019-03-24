const mdal = {
  active: false,
  mediaData: {}
}

const modal = (state = mdal, action) => {
  switch (action.type) {
    case 'LOAD_DATA_MODAL': {
      return {
        ...action.payload
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default modal
