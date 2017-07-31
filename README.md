# react-server-render
## Is webpack necessary?
1. Node does not support 'import xxx from xxx' and some ES6 syntax, We need use babel to transcoding.
2. Without webpack or some other tool, The file directory will become cluttered due to compression compilation.

## Several feasible solutions
- Use [StaticRouter](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/StaticRouter.md) + renderToString
