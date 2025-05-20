import axios from 'axios';
import { getAuthToken, saveAuthToken } from './authToken';

const API_BASE_URL = 'https://api.sostudy.de/api/v1';

// The code block initializes an Axios instance for the API service.
// The baseURL is set to API_BASE_URL, the timeout is set to 10000 milliseconds, and the headers object is used to specify the content type for the HTTP requests.
// This configuration ensures that all requests made using this Axios instance will have a consistent base URL and content type, making it easier to manage and maintain the API service.
const apiService = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
});

// The apiService.interceptors.request.use(async config => { ... }) code block sets up an Axios request interceptor to add an authorization token to outgoing requests.
// The getAuthToken() function is called to retrieve the token, which is then added to the request headers if it exists.
// This interceptor is useful for ensuring that all requests made by the application are authenticated and authorized.
// The use of async and await ensures that the token is retrieved before the request is sent.
// apiService.interceptors.request.use(async config => {
//   const token = await getAuthToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
//   }
//   return config;
// });

apiService.interceptors.request.use(async config => {
  try {
    const token = await getAuthToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (error) {
    console.error('Interceptor Error:', error);
    return Promise.reject(error);
  }
});

const apiRequest = {
  _login: async data => {
    try {
      const response = await apiService.post('/login', data);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _register: async data => {
    try {
      const response = await apiService.post('/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _subjectList: async () => {
    try {
      const response = await apiService.get('/subjects');
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _schoolList: async data => {
    try {
      const response = await apiService.get('/schools', data);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _gradesList: async schoolID => {
    try {
      const response = await apiService.get(`/grades?schoolID=${schoolID}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _forgotPasswordRequest: async data => {
    try {
      const response = await apiService.post('/forgot-password/request', data);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _verifyOtp: async data => {
    try {
      const response = await apiService.post(
        '/forgot-password/verify-otp',
        data,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _resetPassword: async data => {
    try {
      const response = await apiService.post(
        '/forgot-password/reset-password',
        data,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getMeetingList: async data => {
    try {
      const response = await apiService.get('/users/meetings', {
        params: data,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getMeetingDetails: async meetingID => {
    try {
      const response = await apiService.get(`/users/meeting/${meetingID}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getTeacherList: async () => {
    try {
      const response = await apiService.get('/student/assigned-teachers');
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getTeacherDetails: async teacherID => {
    try {
      const response = await apiService.get(
        `/student/assigned-teacher/${teacherID}`,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getProfile: async () => {
    try {
      const response = await apiService.get('/users/profile');
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _updateProfile: async data => {
    try {
      const response = await apiService.put('/users/profile', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _updateSchoolGrade: async data => {
    try {
      const response = await apiService.put('/users/school-grade', data);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _changePassword: async data => {
    try {
      const response = await apiService.put('/user/change-password', data);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getDocumentList: async data => {
    try {
      const response = await apiService.get('/users/documents', {
        params: data,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getDocumentComments: async documentID => {
    try {
      const response = await apiService.get(
        `users/document/${documentID}/comments`,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _addDocumentComment: async (data, documentID) => {
    try {
      const response = await apiService.post(
        `users/document/${documentID}/comment`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _markDocumentComplete: async documentID => {
    try {
      const response = await apiService.put(`/student/document/${documentID}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getChatDetails: async payload => {
    try {
      const response = await apiService.get(
        `/chats/${payload.userID}/messages`,
        {
          params: {
            offset: payload.offset,
            limit: 100,
          },
        },
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _groupMembers: async groupID => {
    try {
      const response = await apiService.get(`/users/${groupID}/members/`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _sendMessage: async data => {
    try {
      const response = await apiService.post('/chats', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _addSuggestion: async data => {
    try {
      const response = await apiService.post('/suggestions', data);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getNotifications: async () => {
    try {
      const response = await apiService.get('/users/notifications');
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getNotificationUnread: async () => {
    try {
      const response = await apiService.get('/users/dashboard/unread');
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _reportUser: async data => {
    try {
      const response = await apiService.post('/report', data);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getGroupList: async data => {
    try {
      const response = await apiService.get('/group-chat', {
        params: data,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getGroupMessages: async data => {
    try {
      const response = await apiService.get(
        `/group-chat/${data.userID}/messages`,
        {
          params: {
            offset: data.offset,
            limit: 100,
          },
        },
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _addGroupMessage: async data => {
    try {
      const response = await apiService.post('/group-chat', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getStateList: async () => {
    try {
      const response = await apiService.get('/states');
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _updatePreferences: async data => {
    try {
      const response = await apiService.put('/users/profile', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getCMSContent: async pageName => {
    try {
      const response = await apiService.get(`/cms?page=${pageName}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _updateNotification: async data => {
    try {
      const response = await apiService.put(
        '/users/notification-setting',
        data,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _myTariff: async () => {
    try {
      const response = await apiService.get('/student/my-tariff');
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _freeLessons: async data => {
    try {
      const response = await apiService.get('/student/free-lessons', {
        params: data,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _uploadDocument: async data => {
    try {
      const response = await apiService.post('/student/document', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _uploadClassWork: async data => {
    try {
      const response = await apiService.post('/student/class-work', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getStudentClassWorks: async data => {
    try {
      const response = await apiService.get('/student/class-work', {
        params: data,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getStudentClassWorkDetails: async (subjectID, data) => {
    try {
      const response = await apiService.get(
        `/student/class-work/${subjectID}`,
        {
          params: data,
        },
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _requestFreeLesson: async data => {
    try {
      const response = await apiService.post(
        '/student/request-free-lesson',
        data,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _addMeetingReview: async data => {
    try {
      const response = await apiService.post(`/student/meeting-review`, data);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _deleteChat: async userID => {
    try {
      const response = await apiService.delete(`/chats/${userID}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _lessonQuota: async () => {
    try {
      const response = await apiService.get('/student/lessons-quota');
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _checkReferral: async referralCode => {
    try {
      const response = await apiService.get(
        `/valid-referral-code/${referralCode}`,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _deleteNotification: async ids => {
    try {
      const response = await apiService.delete('users/notifications', {
        params: {
          notificationID: ids,
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getBadWords: async () => {
    try {
      const response = await apiService.get('/bad-words');
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _deleteDocument: async docID => {
    try {
      const response = await apiService.delete(`users/document/${docID}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getStates: async () => {
    try {
      const response = await apiService.get('/get-states');
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getSchools: async () => {
    try {
      const response = await apiService.get('/get-schools');
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _getGrades: async id => {
    try {
      const response = await apiService.get(`/get-grades/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _registerUser: async data => {
    try {
      const response = await apiService.post(`/register`, data);
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },
  _verifyRefrralCode: async data => {
    const token = await getAuthToken();
    try {
      const response = await apiService.post(`/verify-otp`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },
  _resendOtpCode: async data => {
    const token = await getAuthToken();
    try {
      const response = await apiService.post(`/resend-otp`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },
  _forgetPassword: async data => {
    try {
      const response = await apiService.post(`/user/forget-password`, data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },
  _userLogin: async data => {
    const response = await apiService.post(`/login`, data);
    try {
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },
  _resetPassword: async data => {
    const token = await getAuthToken();
    try {
      const response = await apiService.put(`/user/reset-password`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _emailValidation: async data => {
    try {
      const response = await apiService.post('/user/validate-email', data);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _userNameValidation: async data => {
    try {
      const response = await apiService.post('/user/validate-username', data);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _recieveOTP: async data => {
    try {
      const response = await apiService.post('/send-register-otp', data);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _updateSchool: async data => {
    try {
      const response = await apiService.put('/student/update-school', data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _getProfile: async () => {
    try {
      const response = await apiService.get('/student/profile');
      return response.data;
    } catch (error) {
      return error;
    }
  },


  _updateProfile: async data => {
    try {
      const response = await apiService.put('/student/update-profile', data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },


  _updateProfileImage: async data => {
    try {
      const response = await apiService.put('/student/update-profile-image', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _changeUserPassword: async data => {
    try {
      const response = await apiService.put('/user/change-password', data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _updateNotifications: async data => {
    try {
      const response = await apiService.put('/user/notifications', data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _updateAvailability: async data => {
    try {
      const response = await apiService.put('/student/availability', data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _uploadScannedClassWork: async data => {
    const response = await apiService.post(`/student/upload-classwork-scanned`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    try {
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _uploadManualClassWork: async data => {
    const response = await apiService.post(`/student/upload-classwork-manually`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    try {
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _getClassWork: async () => {
    try {
      const response = await apiService.get('/student/classwork');
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _getSubjectClassWork: async (id) => {
    try {
      const response = await apiService.get(`/student/classwork/subject/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _getClassWorkDetails: async (id) => {
    try {
      const response = await apiService.get(`/student/classwork/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _getClassWorkByDate: async (data) => {
    try {
      const response = await apiService.post(`/student/classwork/date`, data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _uploadSuggestions: async (data) => {
    try {
      const response = await apiService.post(`/student/suggestion`, data);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _getSubjects: async () => {
    try {
      const response = await apiService.get(`/get-subjects`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _upgradePremium: async (data) => {
    try {
      const response = await apiService.post(`/upgrade-premium`, data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _getMeetings: async (param) => {
    try {
      const response = await apiService.get(`/student/meetings${param}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _getJoinMeetings: async (id) => {
    try {
      const response = await apiService.get(`/student/meetings/join/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _getChatList: async () => {
    try {
      const response = await apiService.get(`/student/chats`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _blockChat: async (id) => {
    try {
      const response = await apiService.post(`/student/chats/block/${id}`);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _unBlockChat: async (id) => {
    try {
      const response = await apiService.post(`/student/chats/block/${id}`);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },
  _reportChat: async (id) => {
    try {
      const response = await apiService.post(`/student/chats/report/${id}`);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _mediaUpload: async (data) => {
    try {
      const response = await apiService.post(`/student/chats/media/upload`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _createChat: async (id) => {
    try {
      const response = await apiService.post(`/student/chats/create/${id}`);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _getDocuments: async () => {
    try {
      const response = await apiService.get(`/student/documents`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _getDocumentDetails: async (id) => {
    try {
      const response = await apiService.get(`/student/documents/details/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _documentUpload: async (data) => {
    try {
      const response = await apiService.post(`/student/documents/upload`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },



  _attachmentUpload: async (data) => {
    try {
      const response = await apiService.post(`/student/documents/comment/attachment`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _markCompleted: async (id) => {
    try {
      const response = await apiService.post(`/student/documents/details/${id}/mark-complete`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _getTutors: async () => {
    try {
      const response = await apiService.get(`/student/tutors`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _rateMeeting: async (id, data) => {
    try {
      const response = await apiService.post(`/student/meetings/rate/${id}`, data);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _getTutorDetails: async (id) => {
    try {
      const response = await apiService.get(`/student/tutors/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _requestExtraFreeLesson: async (data) => {
    try {
      const response = await apiService.post(`/student/extra-lessons/request`, data);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  _attachmentUploadTeacher: async (id, data) => {
    try {
      const response = await apiService.post(`/teacher/documents/${id}/comment/attachment`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      } else {
        return { error: error.message };
      }
    }
  },

  _getFlashCards: async () => {
    try {
      const response = await apiService.get(`/student/flashcard`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _getCompletedExam: async () => {
    try {
      const response = await apiService.get(`/student/completed-exams`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _getKnowledgeLevel: async () => {
    try {
      const response = await apiService.get(`/student/knowledge-level`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _getSkillMap: async () => {
    try {
      const response = await apiService.get(`/student/skill-map`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _addTodo: async (data) => {
    try {
      const response = await apiService.post(`/student/todos/add`, data);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _getTodos: async (params) => {
    try {
      const response = await apiService.get(`/student/todos${params}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _markTodoComplete: async (id) => {
    try {
      const response = await apiService.get(`/student/todos/${id}/mark-complete`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _deleteTodo: async (id) => {
    try {
      const response = await apiService.delete(`/student/todos/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _updatDueDate: async (id, data) => {
    try {
      const response = await apiService.put(`/student/todos/${id}/update-due-date`, data);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  _getTodoStats: async () => {
    try {
      const response = await apiService.get(`/student/todos/get-stats`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export { apiRequest, API_BASE_URL };
