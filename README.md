# 🟪 Assignment 2 - JavaScript

## 🎯 Purpose

- Build a front-end web application using Vite with TypeScript
- Create a responsive and user-friendly interface based on provided designs
- Utilize core DOM APIs and TypeScript to structure a scalable application
- Implement logic to handle mathematical computations and display results dynamically
- Update the UI in real time when user input changes
- Store and manage user input history with options to add and remove entries
- Use the HTML `<canvas>` element and JavaScript to render visual graphs

## 📦 Project Structure

The starter code contains the following:

- 🚫 `/.devcontainer`
- 🚫 `/.vscode`
- 🛠️ `/src/constants`
- 🛠️ `/src/types`
- 🛠️ `/src/utils`
- 🛠️ `/src/script.ts`
- 🚫 `/src/style.css`
- 🚫 `/.gitignore`
- 🚫 `/biome.json`
- 🔎 `/cspell.json`
- 🛠️ `/index.html`
- 🚫 `/package.json`
- 🔎 `/README.md`
- 🚫 `/tsconfig.json`

**Legend:**

- 🔎 = content should be viewed
- 🛠️ = content requires modification
- 🚫 = content must **not** be edited

## 🧪 Demo

A working [demo](https://ics4u-d2784-assignment-02.firebaseapp.com/) has been provided

## ☑️ Task

1. Design and implement a user interface that matches the provided demo within reason
2. The application must be able to solve cubic equations and handle the following cases:
   - Three distinct real roots
   - One real root and two complex roots (display “Complex Number” for non-real roots)
   - One real root with a repeated root (double or triple root)
3. When any of the coefficients change, the application should immediately update
4. When the “Save” button is pressed, the current set of coefficients should be added to a history list; duplicate entries must not be allowed
5. When a “Delete” button is pressed, that set of coefficients should be removed from the history list

## 💡 Tips

- Implement the application in phases
- Commit and push regularly to GitHub
- Leverage TypeScript to reduce bugs with strong typing
- Fix all errors and warnings early
- Use the type check, formatter and spell checker in the menu
- Test frequently

## 📝 Grading Criteria

- Grades will be based on completeness, efficiency and style
- Code should be well-organized, readable and properly structured
- Application should meet all required functionality
- UI should be functional and reasonably consistent with the demo
- This assignment is worth **13%**
- **Plagiarism of any kind will be met with severe consequences**

## ⚠️ Important

- This starter code **must** but used

## Deriving the Cubic Formula Using a Depressed Cubic

If $ax^{3}+bx^{2}+cx+d=0$ is a cubic function, where $a,b,c,d\in\mathbb{R}$, what kinds of roots can we expect and how can we calculate them?

Given that complex roots must come in pairs, for real coefficients, we have the following cases:

- **Case A:** Three distinct real roots
- **Case B:** One real root and two complex roots
- **Case C:** One real root with a double root, or a triple root

To simplify our task, we can eliminate the quadratic term and depress (flatten) the cubic function. To accomplish this, we must determine a substitution for $x$ as follows:

Let $x=y+h$

$a(y+h)^{3}+b(y+h)^{2}+c(y+h)+d=0$

$ay^{3}+3ay^{2}h+3ayh^{2}+ah^{3}+by^{2}+2byh+bh^{2}+cy+ch+d=0$

$ay^{3}+y^{2}(3ah+b)+3ayh^{2}+ah^{3}+2byh+bh^{2}+cy+ch+d=0$

Hence, if $h=\frac{-b}{3a}$ we can eliminate the quadratic term by using $x=y-\frac{b}{3a}.$

Using this substitution, we get:

$a\left(y-\frac{b}{3a}\right)^{3}+b\left(y-\frac{b}{3a}\right)^{2}+c\left(y-\frac{b}{3a}\right)+d=0$

$ay^{3}-by^{2}+\frac{b^{2}}{3a}y-\frac{b^{3}}{27a^{2}}+by^{2}-\frac{2b^{2}}{3a}y+\frac{b^{3}}{9a^{2}}+cy-\frac{bc}{3a}+d=0$

To simplify things, we can let:

$p=\frac{3ac-b^{2}}{3a^{2}}$

$ay^{3}+\left(-\frac{b^{2}}{3a}+c\right)y+\left(-\frac{b^{3}}{27a^{2}}+\frac{b^{3}}{9a^{2}}-\frac{bc}{3a}+d\right)=0$

$ay^{3}+\left(\frac{3ac-b^{2}}{3a}\right)y+\left(\frac{27a^{2}d-9abc+2b^{3}}{27a^{2}}\right)=0$

$q=\frac{27a^{2}d-9abc+2b^{3}}{27a^{3}}$

$y^{3}+\left(\frac{3ac-b^{2}}{3a^{2}}\right)y+\left(\frac{27a^{2}d-9abc+2b^{3}}{27a^{3}}\right)=0$

This gives us our depressed cubic form of $y^{3}+py+q=0$

From this point, we can use two techniques to derive the roots:

- **Trigonometric Method** – works for Case A only, but avoids complex numbers
- **Cardano's Method** – works for all three cases, but requires complex numbers

## Trigonometric Method

The expression $y^{3}+py+q=0$ is like the identity $\cos(3\theta)=4\cos^{3}\theta-3\cos\theta$.

We can convert it into a trigonometric expression with the substitution $y=k\cos\theta$.

$(k\cos\theta)^{3}+p(k\cos\theta)+q=0$

$k^{3}\cos^{3}\theta+pk\cos\theta+q=0$

Now, allow $k^{3}=4$ and $pk=-3$. We can now substitute for the value of $k$.

$\frac{k^{3}}{pk}=\frac{4}{-3}$

$-3k^{2}=4p$

$k=2\sqrt{\frac{-p}{3}}$

$k^{3}\cos^{3}\theta+pk\cos\theta+q=0$

$\left(2\sqrt{\frac{-p}{3}}\right)^{3}\cos^{3}\theta+p\left(2\sqrt{\frac{-p}{3}}\right)\cos\theta+q=0$

$8\left(\sqrt{\frac{-p}{3}}\right)^{3}\cos^{3}\theta+2p\left(2\sqrt{\frac{-p}{3}}\right)\cos\theta+q=0$

$2\sqrt{\frac{-p}{3}}\left(4\left(\sqrt{\frac{-p}{3}}\right)^{2}\cos^{3}\theta+p\cos\theta\right)=-q$

$\frac{-4p}{3}\cos^{3}\theta+p\cos\theta=\frac{-q}{2\sqrt{\frac{-p}{3}}}$

$4\cos^{3}\theta-3\cos\theta=\frac{3q}{2p\sqrt{\frac{-p}{3}}}$

$\cos(3\theta)=\frac{-q}{2\sqrt{-\left(\frac{p}{3}\right)^{3}}}$

$\theta=\frac{1}{3}\cos^{-1}\left(\frac{-q}{2\sqrt{-\left(\frac{p}{3}\right)^{3}}}\right)$

Since $\cos(3\theta)$ repeats 3 times over $\theta\in[0,2\pi]$ we can attain all root $y$-values using $y=k\cos\theta$:

$y_{1}=2\sqrt{\frac{-p}{3}}\cos\theta$

$y_{2}=2\sqrt{\frac{-p}{3}}\cos\left(\theta+\frac{2\pi}{3}\right)$

$y_{3}=2\sqrt{\frac{-p}{3}}\cos\left(\theta+\frac{4\pi}{3}\right)$

We can attain all the distinct roots using $x=y-\frac{b}{3a}$:

$x_{1}=2\sqrt{\frac{-p}{3}}\cos\theta-\frac{b}{3a}$

$x_{2}=2\sqrt{\frac{-p}{3}}\cos\left(\theta+\frac{2\pi}{3}\right)-\frac{b}{3a}$

$x_{3}=2\sqrt{\frac{-p}{3}}\cos\left(\theta+\frac{4\pi}{3}\right)-\frac{b}{3a}$

## Cardano's Method

We assume that the solution for $y=u+v$.

$y^{3}=(u+v)^{3}$

$=u^{3}+v^{3}+3uv(u+v)$

Substituting this into the depressed cubic expression $y^{3}+py+q=0$, we get:

$u^{3}+v^{3}+3uv(u+v)+p(u+v)+q=0$

$u^{3}+v^{3}+(u+v)(3uv+p)+q=0$

If we let $uv=-\frac{p}{3}$ this simplifies our expression to $u^{3}+v^{3}=-q$.

To find the $u$ and $v$ values, we can let $U=u^{3}$ and $V=v^{3}$, giving us:

$U+V=-q \quad \text{and} \quad UV=(uv)^{3}=\left(-\frac{p}{3}\right)^{3}$

These expressions give us the sum and product of a quadratic:

$z^{2}-(\text{sum})z+(\text{product})=0$

$z^{2}-(-q)z+\left(-\frac{p}{3}\right)^{3}=0$

$z^{2}+qz-\frac{p^{3}}{27}=0$

Solving this quadratic, we get:

$z=\frac{-q\pm\sqrt{q^{2}-4(1)\left(-\frac{p^{3}}{27}\right)}}{2(1)}$

$=\frac{-q\pm\sqrt{q^{2}+\frac{4p^{3}}{27}}}{2}$

$=\frac{-q}{2}\pm\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}$

$=\frac{-q}{2}\pm\sqrt{\left(\frac{q}{2}\right)^{2}+\left(\frac{p}{3}\right)^{3}}$

Hence, $U=\frac{-q}{2}+\sqrt{\left(\frac{q}{2}\right)^{2}+\left(\frac{p}{3}\right)^{3}}$ and $V=\frac{-q}{2}-\sqrt{\left(\frac{q}{2}\right)^{2}+\left(\frac{p}{3}\right)^{3}}.$

Since $U=u^{3}$ and $V=v^{3}$:

$u=\sqrt[3]{\frac{-q}{2}+\sqrt{\left(\frac{q}{2}\right)^{2}+\left(\frac{p}{3}\right)^{3}}} \quad \text{and} \quad v=\sqrt[3]{\frac{-q}{2}-\sqrt{\left(\frac{q}{2}\right)^{2}+\left(\frac{p}{3}\right)^{3}}}$

This allows us to restate our assumption of $y=u+v$ as:

$y=\sqrt[3]{\frac{-q}{2}+\sqrt{\left(\frac{q}{2}\right)^{2}+\left(\frac{p}{3}\right)^{3}}} + \sqrt[3]{\frac{-q}{2}-\sqrt{\left(\frac{q}{2}\right)^{2}+\left(\frac{p}{3}\right)^{3}}}$

Where the discriminant is $\Delta=\left(\frac{q}{2}\right)^{2}+\left(\frac{p}{3}\right)^{3}.$

The root can be calculated by using $x=y-\frac{b}{3a}$:

$x=\sqrt[3]{\frac{-q}{2}+\sqrt{\left(\frac{q}{2}\right)^{2}+\left(\frac{p}{3}\right)^{3}}} + \sqrt[3]{\frac{-q}{2}-\sqrt{\left(\frac{q}{2}\right)^{2}+\left(\frac{p}{3}\right)^{3}}}-\frac{b}{3a}$

We can now use the discriminant to solve the roots in all three cases:

### Case A ($\Delta < 0$)

- Use Cardano's Method once and cube roots of unity to find the other two real roots
- Alternatively, use the Trigonometric Method

### Case B ($\Delta > 0$)

- Use Cardano's Method once and cube roots of unity to find the other two complex roots

### Case C ($\Delta = 0$)

- If $p=q=0$, use Cardano's Method once to get the triple root
- If $p \neq 0$:
- Use Cardano's Method once to get the double root
- Use the following to get the single root:

$y^{3}+py+q=(y-r_{1})^{2}(y-r_{2})$

$=y^{3}-(2r_{1}+r_{2})y^{2}+({r_{1}}^{2}+2r_{1}r_{2})y-r_{1}^{2}r_{2}$

Since the cubic is depressed, $-(2r_{1}+r_{2})=0$, this makes the double root $r_{1}=-\frac{r_{2}}{2}.$

Given that $q=-r_{1}^{2}r_{2}$, we can solve for $r_{2}$ as follows:

$q=-\left(-\frac{r_{2}}{2}\right)^{2}r_{2}$

$q=-\frac{r_{2}^{3}}{4}$

$r_{2}=-\sqrt[3]{4q}$

$x=-\sqrt[3]{4q}-\frac{b}{3a}$
