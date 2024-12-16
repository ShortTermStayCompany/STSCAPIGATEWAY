## API Gateway for ShortTermStayCompany

### **Overview**
This API Gateway acts as a single entry point for the **ShortTermStayCompany** project. Instead of calling multiple API endpoints, clients interact with this gateway, which forwards requests to the appropriate backend services.

---

### **How It Works**

- **Without API Gateway**:  
  **Client** ➔ **Directly to** `/auth/login` (Auth Service)

- **With API Gateway**:  
  **Client** ➔ **API Gateway** `/api/auth/login` ➔ **Auth Service**

---

### **Why Use an API Gateway?**
1. **Single Endpoint**: Combines multiple APIs into one endpoint for simplicity.
2. **Input Validation**: Handles input checks, keeping backend services clean.
3. **Separation of Concerns**: Avoids cluttering core services with gateway-related tasks.


---

### **Endpoints**
| Route                     | Method | Description                    |
|---------------------------|--------|--------------------------------|
| `/api/auth/register`      | POST   | Register a new user            |
| `/api/auth/login`         | POST   | Authenticate a user            |
| `/api/listing/insert`     | POST   | Insert a new listing           |
| `/api/listing/listings`   | GET    | Fetch paginated listings       |

---

### **Docker**
Build and run using Docker:
```bash
docker build -t api-gateway .
docker run -p 3000:3000 --env-file .env api-gateway
```

---
### **Or Run Locally**
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node server.js
   ```

3. Use `http://localhost:3000` to access the API Gateway.

---

