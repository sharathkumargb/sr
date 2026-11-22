window.JAVA_PROGRAMS = [
  {
    "title": "Hello World",
    "desc": "Print a welcome message.",
    "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, CodeWithSharu!\");\n  }\n}"
  },
  {
    "title": "Add Two Numbers",
    "desc": "Read two integers and display their sum.",
    "code": "import java.util.Scanner;\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    int a = sc.nextInt(), b = sc.nextInt();\n    System.out.println(\"Sum = \" + (a + b));\n  }\n}"
  },
  {
    "title": "Even or Odd",
    "desc": "Check whether a number is even or odd.",
    "code": "import java.util.Scanner;\npublic class Main {\n  public static void main(String[] args) {\n    int n = new Scanner(System.in).nextInt();\n    System.out.println(n % 2 == 0 ? \"Even\" : \"Odd\");\n  }\n}"
  },
  {
    "title": "Largest of Three",
    "desc": "Find the largest among three numbers.",
    "code": "import java.util.Scanner;\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    int a=sc.nextInt(), b=sc.nextInt(), c=sc.nextInt();\n    System.out.println(\"Largest = \" + Math.max(a, Math.max(b,c)));\n  }\n}"
  },
  {
    "title": "Factorial",
    "desc": "Calculate factorial using a loop.",
    "code": "import java.util.Scanner;\npublic class Main {\n  public static void main(String[] args) {\n    int n=new Scanner(System.in).nextInt(); long f=1;\n    for(int i=1;i<=n;i++) f*=i;\n    System.out.println(\"Factorial = \"+f);\n  }\n}"
  },
  {
    "title": "Prime Number",
    "desc": "Check if a number is prime.",
    "code": "import java.util.Scanner;\npublic class Main {\n  public static void main(String[] args) {\n    int n=new Scanner(System.in).nextInt(); boolean prime=n>1;\n    for(int i=2;i*i<=n;i++) if(n%i==0) prime=false;\n    System.out.println(prime ? \"Prime\" : \"Not prime\");\n  }\n}"
  },
  {
    "title": "Fibonacci Series",
    "desc": "Print first n Fibonacci numbers.",
    "code": "import java.util.Scanner;\npublic class Main {\n  public static void main(String[] args) {\n    int n=new Scanner(System.in).nextInt(), a=0, b=1;\n    for(int i=0;i<n;i++){ System.out.print(a+\" \"); int c=a+b; a=b; b=c; }\n  }\n}"
  },
  {
    "title": "Reverse a Number",
    "desc": "Reverse the digits of an integer.",
    "code": "import java.util.Scanner;\npublic class Main {\n  public static void main(String[] args) {\n    int n=new Scanner(System.in).nextInt(), rev=0;\n    while(n!=0){ rev=rev*10+n%10; n/=10; }\n    System.out.println(rev);\n  }\n}"
  },
  {
    "title": "Palindrome Number",
    "desc": "Check whether a number reads the same backward.",
    "code": "import java.util.Scanner;\npublic class Main {\n  public static void main(String[] args) {\n    int n=new Scanner(System.in).nextInt(), t=n, r=0;\n    while(t>0){r=r*10+t%10;t/=10;}\n    System.out.println(n==r ? \"Palindrome\" : \"Not palindrome\");\n  }\n}"
  },
  {
    "title": "Armstrong Number",
    "desc": "Check a three-digit Armstrong number.",
    "code": "import java.util.Scanner;\npublic class Main {\n  public static void main(String[] args) {\n    int n=new Scanner(System.in).nextInt(), t=n, sum=0;\n    while(t>0){int d=t%10;sum+=d*d*d;t/=10;}\n    System.out.println(sum==n ? \"Armstrong\" : \"Not Armstrong\");\n  }\n}"
  },
  {
    "title": "Swap Two Numbers",
    "desc": "Swap values using a temporary variable.",
    "code": "public class Main {\n  public static void main(String[] args) {\n    int a=10,b=20,temp=a; a=b; b=temp;\n    System.out.println(\"a=\"+a+\", b=\"+b);\n  }\n}"
  },
  {
    "title": "Multiplication Table",
    "desc": "Print the multiplication table of a number.",
    "code": "import java.util.Scanner;\npublic class Main {\n  public static void main(String[] args) {\n    int n=new Scanner(System.in).nextInt();\n    for(int i=1;i<=10;i++) System.out.println(n+\" x \"+i+\" = \"+(n*i));\n  }\n}"
  },
  {
    "title": "Array Sum and Average",
    "desc": "Find sum and average of array elements.",
    "code": "public class Main {\n  public static void main(String[] args) {\n    int[] a={10,20,30,40,50}; int sum=0;\n    for(int x:a) sum+=x;\n    System.out.println(\"Sum=\"+sum+\", Average=\"+(sum/(double)a.length));\n  }\n}"
  },
  {
    "title": "Linear Search",
    "desc": "Search an element in an array.",
    "code": "public class Main {\n  public static void main(String[] args) {\n    int[] a={4,8,2,9,5}, key=9, pos=-1;\n    for(int i=0;i<a.length;i++) if(a[i]==key){pos=i;break;}\n    System.out.println(\"Index = \"+pos);\n  }\n}"
  },
  {
    "title": "Bubble Sort",
    "desc": "Sort an integer array in ascending order.",
    "code": "import java.util.Arrays;\npublic class Main {\n  public static void main(String[] args) {\n    int[] a={5,2,8,1,3};\n    for(int i=0;i<a.length-1;i++) for(int j=0;j<a.length-1-i;j++)\n      if(a[j]>a[j+1]){int t=a[j];a[j]=a[j+1];a[j+1]=t;}\n    System.out.println(Arrays.toString(a));\n  }\n}"
  },
  {
    "title": "Matrix Addition",
    "desc": "Add two 2x2 matrices.",
    "code": "public class Main {\n  public static void main(String[] args) {\n    int[][] a={{1,2},{3,4}}, b={{5,6},{7,8}};\n    for(int i=0;i<2;i++){for(int j=0;j<2;j++) System.out.print((a[i][j]+b[i][j])+\" \");System.out.println();}\n  }\n}"
  },
  {
    "title": "String Palindrome",
    "desc": "Check whether a string is a palindrome.",
    "code": "public class Main {\n  public static void main(String[] args) {\n    String s=\"level\"; String rev=new StringBuilder(s).reverse().toString();\n    System.out.println(s.equalsIgnoreCase(rev) ? \"Palindrome\" : \"Not palindrome\");\n  }\n}"
  },
  {
    "title": "Method Overloading",
    "desc": "Demonstrate methods with same name and different parameters.",
    "code": "public class Main {\n  static int add(int a,int b){return a+b;}\n  static double add(double a,double b){return a+b;}\n  public static void main(String[] args){System.out.println(add(2,3));System.out.println(add(2.5,3.5));}\n}"
  },
  {
    "title": "Class and Object",
    "desc": "Create a class and access its method through an object.",
    "code": "class Student {\n  String name=\"Sharath\";\n  void display(){System.out.println(\"Name: \"+name);}\n}\npublic class Main {\n  public static void main(String[] args){Student s=new Student();s.display();}\n}"
  },
  {
    "title": "Inheritance",
    "desc": "Demonstrate single inheritance.",
    "code": "class Animal { void eat(){System.out.println(\"Eating\");} }\nclass Dog extends Animal { void bark(){System.out.println(\"Barking\");} }\npublic class Main {\n  public static void main(String[] args){Dog d=new Dog();d.eat();d.bark();}\n}"
  }
];
window.DSA_PROGRAMS = [
  {
    "title": "Array traversal",
    "group": "Linear",
    "desc": "Visit and print every element.",
    "code": "#include <stdio.h>\nint main(void) {\n    int a[] = {10, 20, 30, 40, 50};\n    int n = sizeof(a) / sizeof(a[0]);\n    for (int i = 0; i < n; i++) printf(\"%d \", a[i]);\n    return 0;\n}"
  },
  {
    "title": "Linear search",
    "group": "Linear",
    "desc": "Find a key by checking elements one by one.",
    "code": "#include <stdio.h>\nint main(void) {\n    int a[] = {4, 8, 2, 9, 5}, key = 9, pos = -1;\n    for (int i = 0; i < 5; i++)\n        if (a[i] == key) { pos = i; break; }\n    printf(\"Position = %d\", pos);\n    return 0;\n}"
  },
  {
    "title": "Stack using array",
    "group": "Linear",
    "desc": "Push and pop using LIFO order.",
    "code": "#include <stdio.h>\n#define MAX 5\nint stack[MAX], top = -1;\nvoid push(int x) {\n    if (top == MAX - 1) printf(\"Overflow\\n\");\n    else stack[++top] = x;\n}\nvoid pop(void) {\n    if (top == -1) printf(\"Underflow\\n\");\n    else printf(\"Deleted: %d\\n\", stack[top--]);\n}\nint main(void) {\n    push(10); push(20); push(30); pop();\n    for (int i = top; i >= 0; i--) printf(\"%d \", stack[i]);\n    return 0;\n}"
  },
  {
    "title": "Queue using array",
    "group": "Linear",
    "desc": "Insert at rear and delete from front.",
    "code": "#include <stdio.h>\n#define MAX 5\nint q[MAX], front = 0, rear = -1;\nvoid enqueue(int x) {\n    if (rear == MAX - 1) printf(\"Queue full\\n\");\n    else q[++rear] = x;\n}\nvoid dequeue(void) {\n    if (front > rear) printf(\"Queue empty\\n\");\n    else printf(\"Deleted: %d\\n\", q[front++]);\n}\nint main(void) {\n    enqueue(11); enqueue(22); enqueue(33); dequeue();\n    for (int i = front; i <= rear; i++) printf(\"%d \", q[i]);\n    return 0;\n}"
  },
  {
    "title": "Singly linked list",
    "group": "Linear",
    "desc": "Create nodes and display the list.",
    "code": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node { int data; struct Node *next; };\nint main(void) {\n    struct Node *head = NULL, *tail = NULL;\n    for (int i = 1; i <= 3; i++) {\n        struct Node *n = malloc(sizeof *n);\n        if (!n) return 1;\n        n->data = i * 10; n->next = NULL;\n        if (!head) head = n; else tail->next = n;\n        tail = n;\n    }\n    for (struct Node *p = head; p; p = p->next) printf(\"%d -> \", p->data);\n    printf(\"NULL\\n\");\n    while (head) { struct Node *t = head; head = head->next; free(t); }\n    return 0;\n}"
  },
  {
    "title": "Circular queue",
    "group": "Linear",
    "desc": "Use modulo arithmetic to reuse queue space.",
    "code": "#include <stdio.h>\n#define N 5\nint q[N], front = -1, rear = -1;\nvoid insert(int x) {\n    if ((rear + 1) % N == front) { puts(\"Full\"); return; }\n    if (front == -1) front = 0;\n    rear = (rear + 1) % N; q[rear] = x;\n}\nvoid removeItem(void) {\n    if (front == -1) { puts(\"Empty\"); return; }\n    printf(\"Removed %d\\n\", q[front]);\n    if (front == rear) front = rear = -1;\n    else front = (front + 1) % N;\n}\nint main(void) { insert(5); insert(10); removeItem(); insert(15); return 0; }"
  },
  {
    "title": "Binary tree traversal",
    "group": "Non-linear",
    "desc": "Create a small binary tree and perform inorder traversal.",
    "code": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node { int data; struct Node *left, *right; };\nstruct Node *node(int x) {\n    struct Node *n = malloc(sizeof *n);\n    n->data = x; n->left = n->right = NULL; return n;\n}\nvoid inorder(struct Node *r) {\n    if (r) { inorder(r->left); printf(\"%d \", r->data); inorder(r->right); }\n}\nint main(void) {\n    struct Node *root = node(2);\n    root->left = node(1); root->right = node(3);\n    inorder(root); return 0;\n}"
  },
  {
    "title": "Binary search tree insertion",
    "group": "Non-linear",
    "desc": "Insert values into a binary search tree.",
    "code": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node { int data; struct Node *left, *right; };\nstruct Node *insert(struct Node *r, int x) {\n    if (!r) { r = malloc(sizeof *r); r->data=x; r->left=r->right=NULL; }\n    else if (x < r->data) r->left = insert(r->left, x);\n    else if (x > r->data) r->right = insert(r->right, x);\n    return r;\n}\nvoid inorder(struct Node *r) {\n    if (r) { inorder(r->left); printf(\"%d \",r->data); inorder(r->right); }\n}\nint main(void) {\n    struct Node *root=NULL;\n    root=insert(root,20); root=insert(root,10); root=insert(root,30);\n    inorder(root); return 0;\n}"
  },
  {
    "title": "Binary tree height",
    "group": "Non-linear",
    "desc": "Calculate height recursively.",
    "code": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node { int data; struct Node *left, *right; };\nint height(struct Node *r) {\n    if (!r) return 0;\n    int l=height(r->left), h=height(r->right);\n    return 1 + (l > h ? l : h);\n}\nint main(void) {\n    struct Node a={1,NULL,NULL}, b={2,NULL,NULL}, root={3,&a,&b};\n    printf(\"Height = %d\", height(&root)); return 0;\n}"
  },
  {
    "title": "Graph adjacency matrix",
    "group": "Non-linear",
    "desc": "Represent an undirected graph with an adjacency matrix.",
    "code": "#include <stdio.h>\nint main(void) {\n    int g[4][4] = {0};\n    int edges[][2] = {{0,1},{0,2},{1,3},{2,3}};\n    for (int i=0; i<4; i++) {\n        int u=edges[i][0], v=edges[i][1];\n        g[u][v]=g[v][u]=1;\n    }\n    for (int i=0; i<4; i++) {\n        for (int j=0; j<4; j++) printf(\"%d \",g[i][j]);\n        puts(\"\");\n    }\n    return 0;\n}"
  },
  {
    "title": "Binary search",
    "group": "Linear",
    "desc": "Search a sorted array by repeatedly halving the range.",
    "code": "#include <stdio.h>\nint main(void) {\n    int a[]={2,4,6,8,10,12}, key=8, low=0, high=5, pos=-1;\n    while (low<=high) {\n        int mid=(low+high)/2;\n        if (a[mid]==key) { pos=mid; break; }\n        if (a[mid]<key) low=mid+1; else high=mid-1;\n    }\n    printf(\"Index = %d\",pos); return 0;\n}"
  }
];
window.GIT_EXPERIMENTS = [
  {
    "title": "1. Initialize repository, stage and commit",
    "desc": "Create a Git repository and make the first commit.",
    "code": "mkdir gitproject\ncd gitproject\ngit init\ntouch file.txt\ngit add file.txt\ngit commit -m \"initial commit\""
  },
  {
    "title": "2. Create and merge a feature branch",
    "desc": "Create feature-branch, switch to master and merge it.",
    "code": "mkdir gitmerge\ncd gitmerge\ngit init\ntouch file.txt\ngit add file.txt\ngit commit -m \"initial commit\"\ngit checkout -b feature-branch\ntouch work.txt\ngit add work.txt\ngit commit -m \"add work file\"\ngit checkout master\ngit merge feature-branch"
  },
  {
    "title": "3. Stash changes and apply them",
    "desc": "Temporarily save work, change branch, then apply the stash.",
    "code": "mkdir gitstash\ncd gitstash\ngit init\ntouch file.txt\ngit add file.txt\ngit commit -m \"initial commit\"\ntouch b.txt\ngit add b.txt\ngit stash save\ngit checkout -b feature-branch\ntouch c.txt\ngit add c.txt\ngit commit -m \"add c file\"\ngit checkout master\ngit stash apply"
  },
  {
    "title": "4. Clone a remote repository",
    "desc": "Clone the GitHub repository to your local machine.",
    "code": "git clone https://github.com/sharanabasavaraddi82-code/Git_sjmit.git"
  },
  {
    "title": "5. Fetch and rebase",
    "desc": "Fetch remote updates, rebase local main and push.",
    "code": "git init\ngit branch -M main\ngit remote add origin https://github.com/sharanabasavaraddi82-code/Git_sjmit.git\ngit fetch origin\ngit rebase origin/main\ngit push origin main"
  },
  {
    "title": "6. Merge with a custom message",
    "desc": "Merge feature-branch and supply a merge commit message.",
    "code": "git checkout master\ngit merge feature-branch -m \"initial merge\""
  },
  {
    "title": "7. Create a lightweight tag",
    "desc": "Create v1.0 and inspect the commit history.",
    "code": "git tag v1.0\ngit log --oneline"
  },
  {
    "title": "8. Cherry-pick a commit or range",
    "desc": "Apply selected commit(s) from another branch.",
    "code": "git log --oneline\ngit checkout master\ngit cherry-pick 6202bf3\n# Or pick a range:\ngit cherry-pick 58a754e..62f5936"
  },
  {
    "title": "9. Show details of a commit",
    "desc": "Display author, date, message and changes for a commit.",
    "code": "git log --oneline\ngit show 6202bf3"
  },
  {
    "title": "10. Filter commits by author and date",
    "desc": "List commits by JohnDoe in the specified date range.",
    "code": "git log --author=\"JohnDoe\" --since=\"2023-01-01\" --until=\"2023-12-31\""
  },
  {
    "title": "11. Display the last five commits",
    "desc": "Show the latest five commits in repository history.",
    "code": "git log -n 5"
  },
  {
    "title": "12. Revert a commit",
    "desc": "Create a new commit that reverses the selected commit.",
    "code": "git log --oneline\ngit revert 452a79a"
  }
];
