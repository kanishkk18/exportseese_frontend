export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: {
      name: string;
      avatar: string;
    };
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    coverImage: string;
    isFeatured?: boolean;
  }
  
  export const blogPosts: BlogPost[] = [
   
    {
        "id": "1",
        "title": "Buying Houses in India: A Key Player in the Export-Import Industry",
        "excerpt": "Explore the role of Buying Houses in India's export-import sector, their significance in bridging the gap between international buyers and domestic manufacturers.",
        "content": `
          <p><strong>EXPORTSEESE – TRUST & PROFIT</strong></p>
          <p>We are committed to providing multi-dimensional wide-range services to exporters & importers through our team of Export-Import Professionals. Our services include:</p>
          <ul>
            <li>Buying House Services</li>
            <li>Recruitment & Talent Acquisition</li>
            <li>Staffing & Manpower Outsourcing Services</li>
            <li>DGFT Related Issues</li>
            <li>Custom Clearance Support</li>
            <li>Foreign Trade Regulation Updates</li>
            <li>Market Analysis & Research</li>
            <li>Export Documentation</li>
            <li>IGST Refund</li>
            <li>Cross Border Finance & Taxation</li>
            <li>Duty Drawback</li>
            <li>Freight Forwarding - Sea and Air, LCL and FCL Shipping</li>
          </ul>
          
          <h2>What is a Buying House?</h2>
          <p>A Buying House or Buying Agent supports international buyers and domestic manufacturers by assisting in language barriers, price negotiation, product development, customization, quality inspection, shipment coordination, documentation handling, and transparent communication.</p>
          
          <h2>Key Roles of Buying Houses</h2>
          <ul>
            <li><strong>Exploring New Buyers:</strong> Connecting with international buyers and understanding their business needs.</li>
            <li><strong>Finding Sellers & Negotiation:</strong> Approaching manufacturers to match buyer requirements and negotiate deals.</li>
            <li><strong>Quality & Regulatory Compliance Management:</strong> Ensuring quality standards and regulatory compliance.</li>
            <li><strong>Forecasting Market Trends:</strong> Helping buyers anticipate trends and optimize procurement.</li>
            <li><strong>Internal Coordination:</strong> Managing logistics, finance, quality control, and timely delivery.</li>
          </ul>
          
          <h2>Industries Where Buying Houses are Common</h2>
          <p>Buying Houses are essential in industries such as textiles, apparel, leather goods, footwear, handicrafts, and home decor.</p>
          
          <h2>Top Buying Houses in India</h2>
          <ul>
            <li><strong><a href="https://a2zbuyingservices.com">A2Z Buying Services</a></strong> - Gurugram, Haryana</li>
            <li><strong><a href="https://ibhinternational.com">IBH International</a></strong> - Delhi</li>
            <li><strong><a href="https://apparelresources.com">Apparel Resources</a></strong> - Delhi</li>
            <li><strong><a href="https://birdyexports.com">Birdy Exports</a></strong> - Bengaluru, Karnataka</li>
            <li><strong><a href="https://eastendapparels.com">East End Apparels</a></strong> - Noida, Uttar Pradesh</li>
            <li><strong><a href="https://genexco.in">Genexco</a></strong> - Mumbai, Maharashtra</li>
            <li><strong><a href="https://geniemode.com">Geniemode</a></strong> - Gurugram, Haryana</li>
            <li><strong><a href="https://integratedoverseas.co.in">Integrated Overseas</a></strong> - Chennai, Tamil Nadu</li>
            <li><strong><a href="https://khqsintl.com">KHQS International</a></strong> - Tirupur, Tamil Nadu</li>
            <li><strong><a href="http://squarepartners.in">Square Partners Industries</a></strong> - Noida, Uttar Pradesh</li>
            <li><strong><a href="https://ssintl.in">SS International</a></strong> - Delhi</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>Buying Houses play a crucial role in facilitating trade, ensuring quality compliance, and streamlining supply chains for international buyers and Indian manufacturers.</p>
          
          <p><strong>Contact:</strong> <a href="mailto:hello@exportseese.com">hello@exportseese.com</a> | <a href="https://www.exporteese.com">www.exporteese.com</a> | +91-9220452221</p>
        `,
        "author": {
          "name": "Exporteese Team",
          "avatar": "https://i.pravatar.cc/150?img=12"
        },
        "date": "March 12, 2025",
        "readTime": "7 min read",
        "category": "Export-Import",
        "tags": ["Buying House", "Export", "Trade"],
        "coverImage": "https://i.pinimg.com/736x/0a/93/f5/0a93f51173c005075f0ee3c49e905c22.jpg",
        "isFeatured": true
      },
      
   {
      id: "3",
      title: "Designing for Accessibility: Creating Inclusive Web Experiences",
      excerpt: "Discover why web accessibility matters and how to implement accessible design principles in your projects.",
      content: `
        <p>Web accessibility is about creating websites and applications that can be used by everyone, including people with disabilities. It's not just a nice-to-have feature but an essential aspect of web development that ensures equal access to information and functionality for all users.</p>
        
        <h2>Understanding Web Accessibility</h2>
        <p>Web accessibility encompasses various disabilities, including visual, auditory, physical, speech, cognitive, and neurological disabilities. By designing with accessibility in mind, you're creating experiences that work for:
        <ul>
          <li>Users with visual impairments who use screen readers</li>
          <li>People with hearing disabilities who need captions for audio content</li>
          <li>Users with motor limitations who navigate using keyboard or voice commands</li>
          <li>Individuals with cognitive disabilities who benefit from clear, consistent layouts</li>
        </ul>
        
        <h2>Key Accessibility Principles</h2>
        <p>The Web Content Accessibility Guidelines (WCAG) provide a framework for accessibility based on four principles:</p>
        <ol>
          <li><strong>Perceivable</strong>: Information must be presentable to users in ways they can perceive.</li>
          <li><strong>Operable</strong>: User interface components and navigation must be operable.</li>
          <li><strong>Understandable</strong>: Information and operation of the user interface must be understandable.</li>
          <li><strong>Robust</strong>: Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies.</li>
        </ol>
        
        <h2>Practical Implementation Tips</h2>
        <ul>
          <li>Use semantic HTML elements (nav, article, main, etc.)</li>
          <li>Provide alt text for images</li>
          <li>Ensure sufficient color contrast</li>
          <li>Design keyboard-navigable interfaces</li>
          <li>Create descriptive link text</li>
          <li>Use ARIA attributes when necessary</li>
          <li>Test with accessibility tools and real users</li>
        </ul>
        
        <h2>The Business Case for Accessibility</h2>
        <p>Beyond the ethical imperative, accessibility makes business sense. Accessible websites:
        <ul>
          <li>Reach a wider audience, including the 15% of the world's population with disabilities</li>
          <li>Often perform better in search engine rankings</li>
          <li>Demonstrate corporate social responsibility</li>
          <li>Reduce legal risks in jurisdictions with accessibility laws</li>
          <li>Generally provide better user experiences for everyone</li>
        </ul>
        
        <p>By integrating accessibility from the beginning of your design process, you create more inclusive digital experiences that work better for all users, regardless of their abilities or how they access the web.</p>
      `,
      author: {
        name: "Jordan Taylor",
        avatar: "https://i.pravatar.cc/150?img=8"
      },
      date: "October 5, 2023",
      readTime: "7 min read",
      category: "UX Design",
      tags: ["Accessibility", "Inclusion", "UX"],
      coverImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    },
    {
      id: "4",
      title: "Understanding TypeScript: A Practical Guide for JavaScript Developers",
      excerpt: "Learn how TypeScript enhances JavaScript development with static typing and advanced features.",
      content: `
        <p>TypeScript has rapidly become a staple in the modern JavaScript ecosystem, offering static typing and additional features that make development more robust and maintainable. This guide explains why TypeScript matters and how to leverage its capabilities effectively.</p>
        
        <h2>What Is TypeScript?</h2>
        <p>TypeScript is a superset of JavaScript developed by Microsoft that adds static type definitions to the language. It compiles down to plain JavaScript but helps catch errors during development rather than at runtime.</p>
        
        <h2>Key Benefits of TypeScript</h2>
        <ul>
          <li><strong>Static Type Checking</strong>: Catch type-related errors during development</li>
          <li><strong>Enhanced IDE Support</strong>: Better autocomplete, navigation, and refactoring</li>
          <li><strong>Improved Code Documentation</strong>: Types serve as built-in documentation</li>
          <li><strong>Safer Refactoring</strong>: The compiler catches errors when changing code</li>
          <li><strong>Enhanced Team Collaboration</strong>: Clearer interfaces between components</li>
        </ul>
        
        <h2>Essential TypeScript Features</h2>
        
        <h3>Type Annotations</h3>
        <p>The most basic feature is annotating variables with types:</p>
        <pre><code>
  let name: string = "Alice";
  let age: number = 30;
  let isActive: boolean = true;
        </code></pre>
        
        <h3>Interfaces</h3>
        <p>Interfaces define the shape of objects:</p>
        <pre><code>
  interface User {
    id: number;
    name: string;
    email: string;
    role?: string; // Optional property
  }
        </code></pre>
        
        <h3>Union Types</h3>
        <p>Variables that can hold multiple types:</p>
        <pre><code>
  let id: string | number;
  id = "abc123"; // Valid
  id = 123;      // Also valid
        </code></pre>
        
        <h3>Generics</h3>
        <p>Create reusable components:</p>
        <pre><code>
  function getFirst<T>(array: T[]): T {
    return array[0];
  }
  
  const first = getFirst([1, 2, 3]); // Type is inferred as number
        </code></pre>
        
        <h2>Migrating to TypeScript</h2>
        <p>You don't need to convert your entire JavaScript codebase at once. TypeScript allows for incremental adoption:</p>
        <ol>
          <li>Start by renaming .js files to .ts</li>
          <li>Configure tsconfig.json with allowJs: true</li>
          <li>Gradually add types, starting with new code</li>
          <li>Use the any type as a temporary measure for complex cases</li>
          <li>Leverage // @ts-ignore for exceptions until they can be properly typed</li>
        </ol>
        
        <p>TypeScript may have a learning curve, but the benefits it brings to medium-to-large projects are substantial. By catching errors early and providing better tooling, it enhances developer productivity and code quality.</p>
      `,
      author: {
        name: "Raj Patel",
        avatar: "https://i.pravatar.cc/150?img=7"
      },
      date: "September 20, 2023",
      readTime: "9 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Web Development"],
      coverImage: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "5",
      title: "CSS Grid vs. Flexbox: When to Use Which Layout System",
      excerpt: "Compare CSS Grid and Flexbox layout systems and learn which scenarios are best suited for each approach.",
      content: `
        <p>Modern CSS offers two powerful layout systems: Grid and Flexbox. While they share some similarities, they're designed for different layout scenarios. Understanding when to use each will help you create more efficient and maintainable layouts.</p>
        
        <h2>CSS Flexbox: One-Dimensional Layouts</h2>
        <p>Flexbox excels at handling distribution of space and alignment in a single dimension (either rows OR columns).</p>
        
        <h3>When to Use Flexbox</h3>
        <ul>
          <li>For layouts with a single row or column of items</li>
          <li>When you need to align items within a container</li>
          <li>For navigation menus and toolbars</li>
          <li>When content size should dictate layout (content-first design)</li>
          <li>For dynamic or unknown sizes of elements</li>
        </ul>
        
        <h3>Flexbox Example</h3>
        <pre><code>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links {
    display: flex;
    gap: 1rem;
  }
        </code></pre>
        
        <h2>CSS Grid: Two-Dimensional Layouts</h2>
        <p>Grid is designed for two-dimensional layouts, allowing precise control over both rows AND columns simultaneously.</p>
        
        <h3>When to Use Grid</h3>
        <ul>
          <li>For complex two-dimensional layouts</li>
          <li>When designing an entire page layout</li>
          <li>For card layouts and image galleries</li>
          <li>When you need precise control over both dimensions</li>
          <li>For layouts where visual order might differ from DOM order</li>
        </ul>
        
        <h3>Grid Example</h3>
        <pre><code>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1rem;
  }
  
  .dashboard {
    display: grid;
    grid-template-areas:
      "header header header"
      "sidebar main main"
      "footer footer footer";
  }
        </code></pre>
        
        <h2>Using Them Together</h2>
        <p>Grid and Flexbox aren't mutually exclusive. Many modern layouts use both:</p>
        <ul>
          <li>Use Grid for the overall page layout</li>
          <li>Use Flexbox for components within the grid areas</li>
          <li>For example, a grid-based card layout might use flexbox within each card</li>
        </ul>
        
        <h3>Combined Example</h3>
        <pre><code>
  .page-layout {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
  
  .card {
    display: flex;
    flex-direction: column;
  }
  
  .card-actions {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
  }
        </code></pre>
        
        <p>Both layout systems have excellent browser support, so the choice comes down to the specific layout needs of your design. By understanding the strengths of each, you can create more efficient layouts with cleaner, more maintainable CSS.</p>
      `,
      author: {
        name: "Emma Wilson",
        avatar: "https://i.pravatar.cc/150?img=9"
      },
      date: "October 10, 2023",
      readTime: "6 min read",
      category: "CSS",
      tags: ["CSS", "Layout", "Web Design"],
      coverImage: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "6",
      title: "Building a RESTful API with Node.js and Express",
      excerpt: "A step-by-step guide to creating robust RESTful APIs using Node.js and Express framework.",
      content: `
        <p>RESTful APIs power many of the applications we use daily. In this guide, we'll walk through building a complete RESTful API using Node.js and Express, covering best practices for structure, authentication, and error handling.</p>
        
        <h2>Setting Up Your Project</h2>
        <p>First, let's set up a new Node.js project with Express:</p>
        
        <pre><code>
  mkdir api-project
  cd api-project
  npm init -y
  npm install express mongoose dotenv
  npm install nodemon --save-dev
        </code></pre>
        
        <p>Create a basic project structure:</p>
        
        <pre><code>
  /api-project
    /controllers
    /models
    /routes
    /middleware
    /config
    server.js
    .env
        </code></pre>
        
        <h2>Creating the Express Server</h2>
        <p>Set up your basic Express server in server.js:</p>
        
        <pre><code>
  const express = require('express');
  const mongoose = require('mongoose');
  require('dotenv').config();
  
  const app = express();
  
  // Middleware
  app.use(express.json());
  
  // Connect to MongoDB
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
  
  // Routes
  app.use('/api/users', require('./routes/users'));
  app.use('/api/posts', require('./routes/posts'));
  
  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
        </code></pre>
        
        <h2>Defining Models</h2>
        <p>Create a model for your resources using Mongoose. For example, a User model:</p>
        
        <pre><code>
  // models/User.js
  const mongoose = require('mongoose');
  
  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    }
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);
        </code></pre>
        
        <h2>Implementing Routes and Controllers</h2>
        <p>Organize your API endpoints with route files and controllers:</p>
        
        <pre><code>
  // routes/users.js
  const express = require('express');
  const router = express.Router();
  const userController = require('../controllers/userController');
  const authMiddleware = require('../middleware/auth');
  
  router.post('/register', userController.register);
  router.post('/login', userController.login);
  router.get('/profile', authMiddleware, userController.getProfile);
  router.put('/profile', authMiddleware, userController.updateProfile);
  
  module.exports = router;
        </code></pre>
        
        <pre><code>
  // controllers/userController.js
  const User = require('../models/User');
  const bcrypt = require('bcrypt');
  const jwt = require('jsonwebtoken');
  
  exports.register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
      
      // Create new user
      user = new User({ name, email, password });
      
      // Hash password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      
      await user.save();
      
      // Create JWT token
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );
      
      res.status(201).json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  // Implement other controller methods...
        </code></pre>
        
        <h2>Adding Authentication Middleware</h2>
        
        <pre><code>
  // middleware/auth.js
  const jwt = require('jsonwebtoken');
  
  module.exports = (req, res, next) => {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
    
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Add user from payload
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ message: 'Token is not valid' });
    }
  };
        </code></pre>
        
        <h2>Implementing CRUD Operations</h2>
        <p>For each resource, implement proper RESTful CRUD operations:</p>
        <ul>
          <li>GET /resource - List all</li>
          <li>GET /resource/:id - Get one</li>
          <li>POST /resource - Create</li>
          <li>PUT /resource/:id - Update</li>
          <li>DELETE /resource/:id - Delete</li>
        </ul>
        
        <h2>API Testing and Documentation</h2>
        <p>Test your API using tools like Postman or Insomnia. Consider creating API documentation with tools like Swagger/OpenAPI.</p>
        
        <p>By following these patterns, you'll create a maintainable, secure RESTful API that can serve as the backend for your web or mobile applications.</p>
      `,
      author: {
        name: "David Johnson",
        avatar: "https://i.pravatar.cc/150?img=12"
      },
      date: "October 8, 2023",
      readTime: "10 min read",
      category: "Backend",
      tags: ["Node.js", "Express", "API"],
      coverImage: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];
  