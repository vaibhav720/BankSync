# 🏦 BankSync

BankSync is a powerful financial management tool that connects with multiple banks, helps users manage their transactions, and provides personalized savings recommendations. This project leverages modern web technologies to deliver a secure, user-friendly experience.

## ⚙️ Tech Stack

- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: For type-safe JavaScript development.
- **Appwrite**: Backend server for authentication and database management.
- **Plaid**: For integrating with multiple bank accounts.
- **Dwolla**: Facilitates funds transfers between accounts.
- **React Hook Form**: Manages form state efficiently with minimal re-renders.
- **Zod**: Schema declaration and validation library for TypeScript.
- **TailwindCSS**: Utility-first CSS framework for designing responsive UIs.
- **Chart.js**: A charting library to visualize transaction data.
- **ShadCN**: A collection of components built with Radix UI and Tailwind CSS.

## 🔋 Features

### 👉 Authentication
- Ultra-secure server-side rendered (SSR) authentication with robust validation and authorization mechanisms, ensuring user data remains protected.

### 👉 Connect Banks
- Seamlessly integrate with multiple bank accounts using Plaid, allowing users to link and manage their financial accounts within the app.

### 👉 Home Page
- Displays a general overview of the user’s account, including total balance across all connected banks, recent transactions, money spent across different categories, and more.

### 👉 My Banks
- View a complete list of all connected banks, including respective balances and account details, providing users with a consolidated financial overview.

### 👉 Transaction History
- Access a detailed transaction history with pagination and filtering options to easily navigate and search through past transactions across different banks.

### 👉 Real-time Updates
- Real-time data synchronization across all relevant pages ensures that changes, such as connecting new bank accounts, are instantly reflected.

### 👉 Funds Transfer
- Transfer funds between accounts using Dwolla, with required fields and recipient bank ID validation for secure transactions.

### 👉 Responsiveness
- The application is fully responsive, providing a seamless experience across desktop, tablet, and mobile devices, ensuring consistent usability on any screen size.

### 👉 And Many More...
- The project emphasizes clean code architecture and reusability, making it easy to maintain and extend. Additional features include advanced error handling, modular components, and performance optimization.
##Preview
<img width="1470" alt="Screenshot 2024-09-01 at 2 02 07 PM" src="https://github.com/user-attachments/assets/16fd1308-479f-45f6-adb5-695aca6d0da3">
<img width="1470" alt="Screenshot 2024-09-01 at 2 02 36 PM" src="https://github.com/user-attachments/assets/229ff5d7-fb72-4514-82c7-67bc56124c62">
<img width="1470" alt="Screenshot 2024-09-01 at 2 02 54 PM" src="https://github.com/user-attachments/assets/6923e82c-ae92-428b-bfa3-4a0026407ae7"><img width="1470" alt="Screenshot 2024-09-01 at 2 03 06 PM" src="https://github.com/user-attachments/assets/515954a9-8dd0-4ace-a41f-ff7f9950443f">
<img width="1470" alt="Screenshot 2024-09-01 at 2 03 15 PM" src="https://github.com/user-attachments/assets/e009ccd9-72a4-410d-8722-c10fcfa3b0e3"><img width="1470" alt="Screenshot 2024-09-01 at 2 03 31 PM" src="https://github.com/user-attachments/assets/5cc3ac3d-4532-4097-9a76-7572355f3eff">








## 🚀 Getting Started

To get started with BankSync, follow the installation instructions below:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/vaibhav720/BankSync.git
    cd BankSync
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Environment Setup**:
   - Create a `.env.local` file and add your environment variables for Next.js, Appwrite, Plaid, and Dwolla.

4. **Run the Application**:
    ```bash
    npm run dev
    ```
   - The application will be available at `http://localhost:3000`.

## 💻 Contributing

We welcome contributions! If you'd like to contribute to BankSync, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you'd like to change.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
