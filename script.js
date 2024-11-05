// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDTRDhb5JDqjKJz7SYL0mO_1FVkEGtfm3Q",
    authDomain: "cc10-3670c.firebaseapp.com",
    projectId: "cc10-3670c",
    storageBucket: "cc10-3670c.appspot.com",
    messagingSenderId: "830759887614",
    appId: "1:830759887614:web:8bc94abc64be12aefdfbaf",
    measurementId: "G-NL1SVC3LBF"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

// Get the login form
const loginForm = document.getElementById('login-form');

// Listen for the login form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Authenticate the user
    try {
        const user = await auth.signInWithEmailAndPassword(username, password);
        console.log(`User ${username} logged in successfully!`);

        // Get the user's data from the Firestore database
        const userRef = db.collection('team').doc(user.uid);
        const userData = await userRef.get();
        const data = userData.data();

        // Update the UI with the user's data
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('role').value = '';

        // Show the dashboard
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main').style.display = 'block';
    } catch (error) {
        console.error('Error logging in:', error);
    }
});

// Listen for the logout button click
document.getElementById('logout-btn').addEventListener('click', async () => {
    try {
        await auth.signOut();
        console.log('User logged out successfully!');
        document.getElementById('login-screen').style.display = 'block';
        document.getElementById('main').style.display = 'none';
    } catch (error) {
        console.error('Error logging out:', error);
    }
});