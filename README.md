# Edgee HTML demo website

This is a simple HTML website that demonstrates how to use Edgee.

## To launch everything the fastest way with Nix

### Prerequisites
- **Have installed Nix**: `curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install`

```bash
## Go wherever you want
git clone git@github.com:edgee-cloud/demo-html.git
cd demo-html
nix develop
make up
```

Then you can go to http://localhost:8080/

But to be able to use the power of Edgee you need to launch the edgee server and set it up to point to your local nginx server.

Feel free to contribute to this Github repository or ask for help via the issues

---

OR

---
## To launch everything the old fashion way

### Prerequisites
- node
- nginx
- make
- edgee https://github.com/edgee-cloud/edgee

#### QuickStart Linux/OSx Dev:

```bash
## Go wherever you want
git clone git@github.com:edgee-cloud/demo-html.git
cd demo-html

make install ## This command will install the npm dependencies
make nginx ## This command will launch a nginx to serve your html file

## Then, if you want tailwindcss to watch your changes
make tailwind
```

Now you can go to http://localhost:8080/

But to be able to use the power of Edgee you need to launch the edgee server and set it up to point to your local nginx server.

Feel free to contribute to this Github repository or ask for help via the issues
