import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,

    loginUsernameOrEmailModel: "",
    loginPasswordModel: "",
    loginErrors: null,

    registerUsernameModel: "",
    registerNameModel: "",
    registerPasswordModel: "",
    registerEmailModel: "",
    registerErrors: "",

    newInfos: {
      name: "",
      mail: "",
      website: "",
      bio: "",
      location: "",
      profileImage: "",
      bannerImage: "",
    },

    newTweet: {
      text: "",
      image: "",
    },

    registerPage: false,
    addTweetPopup: false,
    editTweetPopup: false,
    editProfilePopup: false,
    userId: localStorage.getItem("userId"),
    hashtagRegex: /(?:(?:\s)|^)#(\w*[A-Za-z_ğüşıöçĞÜŞİÖÇ]+\w*)/gi,
    usernameRegex: /(?:(?:\s)|^)@(\w*[A-Za-z_ğüşıöçĞÜŞİÖÇ]+\w*)/gi,

    repliedTweet: {},

    editTweet: {},

    zoomedImage: "",

    currentUser: {},

    userForProfile: {},

    tweetForDetail: {},

    bookmarks: {},

    tweets: [],
  },
  mutations: {},
  actions: {},
  modules: {},
});
