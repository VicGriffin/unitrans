// API Service Layer
// This will be updated with real endpoints when backend is ready

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

// Utility function for API calls
async function apiCall<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Add auth token if available
  const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
  if (token) {
    defaultHeaders["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Consultation API
export const consultationAPI = {
  submit: async (data: Record<string, any>) => {
    return apiCall("/consultations", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};

// Appointment API
export const appointmentAPI = {
  create: async (data: Record<string, any>) => {
    return apiCall("/appointments", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
  getList: async (studentId: string) => {
    return apiCall(`/appointments?studentId=${studentId}`);
  },
  getById: async (id: string) => {
    return apiCall(`/appointments/${id}`);
  },
  update: async (id: string, data: Record<string, any>) => {
    return apiCall(`/appointments/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },
  cancel: async (id: string) => {
    return apiCall(`/appointments/${id}`, {
      method: "DELETE",
    });
  },
};

// Applications API
export const applicationsAPI = {
  getList: async (studentId: string) => {
    return apiCall(`/applications?studentId=${studentId}`);
  },
  getById: async (id: string) => {
    return apiCall(`/applications/${id}`);
  },
  create: async (data: Record<string, any>) => {
    return apiCall("/applications", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
  update: async (id: string, data: Record<string, any>) => {
    return apiCall(`/applications/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },
  delete: async (id: string) => {
    return apiCall(`/applications/${id}`, {
      method: "DELETE",
    });
  },
};

// Visa API
export const visaAPI = {
  getStatus: async (studentId: string) => {
    return apiCall(`/visa/status?studentId=${studentId}`);
  },
  updateStatus: async (studentId: string, data: Record<string, any>) => {
    return apiCall(`/visa/status`, {
      method: "PUT",
      body: JSON.stringify({ studentId, ...data }),
    });
  },
  getDocuments: async (studentId: string) => {
    return apiCall(`/visa/documents?studentId=${studentId}`);
  },
  uploadDocument: async (studentId: string, formData: FormData) => {
    return apiCall(`/visa/documents`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${typeof window !== "undefined" ? localStorage.getItem("authToken") : null}`,
      },
      body: formData,
    });
  },
};

// Messages API
export const messagesAPI = {
  getList: async (studentId: string) => {
    return apiCall(`/messages?studentId=${studentId}`);
  },
  send: async (studentId: string, data: Record<string, any>) => {
    return apiCall("/messages", {
      method: "POST",
      body: JSON.stringify({ studentId, ...data }),
    });
  },
  markAsRead: async (messageId: string) => {
    return apiCall(`/messages/${messageId}/read`, {
      method: "PUT",
    });
  },
};

// Contact Form API
export const contactAPI = {
  submit: async (data: Record<string, any>) => {
    return apiCall("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};

// Universities API
export const universitiesAPI = {
  getList: async (filters?: Record<string, any>) => {
    const params = new URLSearchParams(filters || {});
    return apiCall(`/universities?${params.toString()}`);
  },
  getById: async (id: string) => {
    return apiCall(`/universities/${id}`);
  },
  search: async (query: string) => {
    return apiCall(`/universities/search?q=${encodeURIComponent(query)}`);
  },
};

// Authentication API (for future use)
export const authAPI = {
  login: async (email: string, password: string) => {
    return apiCall("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },
  signup: async (data: Record<string, any>) => {
    return apiCall("/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
  logout: async () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
    }
    return Promise.resolve();
  },
};
