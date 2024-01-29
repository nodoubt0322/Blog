import{_ as n,c as a,a as t,f as p,r as o,o as e}from"./app.d8d1bef2.js";var c="/blog/assets/01.f1cb5233.png",r="/blog/assets/02.f696e17c.jpg";const v='{"title":"\u73A9\u8F49npm script","description":"npm run\u5BE6\u969B\u4E0A\u5C31\u662Fnpm run-script\u7684alias\uFF0C\u7576\u4F60\u57F7\u884Cnpm run\uFF0C\u4ED6\u6703\u5217\u51FApackage.json\u6A94\u6848\u5728scripts\u88E1\u9762\u7684\u6240\u6709\u6307\u4EE4\u3002npm run test\u6703\u57F7\u884Cscripts\u88E1\u9762\u7684test\u6307\u4EE4\uFF0C\u56E0\u70BAtest\u662Fnpm run-script\u5167\u5EFA\u7684\u6307\u4EE4\u4E4B\u4E00\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7E2E\u5BEB\u6210npm test\uFF0C\u751A\u81F3\u662Fnpm t(npm test\u7684alias)\uFF0C\u4E0D\u662F\u5167\u5EFA\u6307\u4EE4\u5C31\u5FC5\u9808\u628Arun\u4E56\u4E56\u7684\u6253\u51FA\u4F86\uFF0C\u50CFnpm run echo...","frontmatter":{"date":"2022-04-22T00:00:00.000Z","title":"\u73A9\u8F49npm script","tags":["\u524D\u7AEF","\u524D\u7AEF\u5DE5\u7A0B\u5316","npm"],"description":"npm run\u5BE6\u969B\u4E0A\u5C31\u662Fnpm run-script\u7684alias\uFF0C\u7576\u4F60\u57F7\u884Cnpm run\uFF0C\u4ED6\u6703\u5217\u51FApackage.json\u6A94\u6848\u5728scripts\u88E1\u9762\u7684\u6240\u6709\u6307\u4EE4\u3002npm run test\u6703\u57F7\u884Cscripts\u88E1\u9762\u7684test\u6307\u4EE4\uFF0C\u56E0\u70BAtest\u662Fnpm run-script\u5167\u5EFA\u7684\u6307\u4EE4\u4E4B\u4E00\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7E2E\u5BEB\u6210npm test\uFF0C\u751A\u81F3\u662Fnpm t(npm test\u7684alias)\uFF0C\u4E0D\u662F\u5167\u5EFA\u6307\u4EE4\u5C31\u5FC5\u9808\u628Arun\u4E56\u4E56\u7684\u6253\u51FA\u4F86\uFF0C\u50CFnpm run echo..."},"headers":[{"level":2,"title":"npm run-script","slug":"npm-run-script"},{"level":3,"title":"\u5167\u5EFA\u6307\u4EE4","slug":"\u5167\u5EFA\u6307\u4EE4"},{"level":3,"title":"inject \u74B0\u5883\u8B8A\u91CF","slug":"inject-\u74B0\u5883\u8B8A\u91CF"},{"level":3,"title":".bin \u57F7\u884C\u6A94","slug":"bin-\u57F7\u884C\u6A94"},{"level":2,"title":"npm run-script \u7684\u4E32\u884C\u8DDF\u4F75\u884C","slug":"npm-run-script-\u7684\u4E32\u884C\u8DDF\u4F75\u884C"},{"level":3,"title":"\u4E32\u884C","slug":"\u4E32\u884C"},{"level":3,"title":"\u4F75\u884C","slug":"\u4F75\u884C"},{"level":2,"title":"pre & post scripts","slug":"pre-post-scripts"},{"level":2,"title":"\u8DE8\u5E73\u53F0\u7684 npm run-script \u8655\u7406","slug":"\u8DE8\u5E73\u53F0\u7684-npm-run-script-\u8655\u7406"},{"level":3,"title":"\u539F\u751F\u5BEB\u6CD5","slug":"\u539F\u751F\u5BEB\u6CD5"},{"level":3,"title":"\u5957\u4EF6\u5BEB\u6CD5","slug":"\u5957\u4EF6\u5BEB\u6CD5"}],"relativePath":"posts/2022-04-22_\u73A9\u8F49npm_script.md","lastUpdated":1706532101633}',i={},l=p(`<h1 id="\u73A9\u8F49-npm-script" tabindex="-1">\u73A9\u8F49 npm script <a class="header-anchor" href="#\u73A9\u8F49-npm-script" aria-hidden="true">#</a></h1><h2 id="npm-run-script" tabindex="-1">npm run-script <a class="header-anchor" href="#npm-run-script" aria-hidden="true">#</a></h2><h3 id="\u5167\u5EFA\u6307\u4EE4" tabindex="-1">\u5167\u5EFA\u6307\u4EE4 <a class="header-anchor" href="#\u5167\u5EFA\u6307\u4EE4" aria-hidden="true">#</a></h3><p>npm run \u5BE6\u969B\u4E0A\u5C31\u662F<code>npm run-script</code>\u7684 alias\uFF0C\u7576\u4F60\u57F7\u884C npm run\uFF0C\u4ED6\u6703\u5217\u51FA<code>package.json</code>\u6A94\u6848\u5728<code>scripts</code>\u88E1\u9762\u7684\u6240\u6709\u6307\u4EE4\u3002</p><p>npm run test \u6703\u57F7\u884C scripts \u88E1\u9762\u7684<code>test</code>\u6307\u4EE4\uFF0C\u56E0\u70BA test \u662F<code>npm run-script</code>\u5167\u5EFA\u7684<a href="https://docs.npmjs.com/cli/v8/commands/npm-run-script" target="_blank" rel="noopener noreferrer">\u6307\u4EE4\u4E4B\u4E00</a>\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7E2E\u5BEB\u6210<code>npm test</code>\uFF0C\u751A\u81F3\u662F<code>npm t</code>(npm test \u7684 alias)\uFF0C\u4E0D\u662F\u5167\u5EFA\u6307\u4EE4\u5C31\u5FC5\u9808\u628A run \u4E56\u4E56\u7684\u6253\u51FA\u4F86\uFF0C\u50CF<code>npm run echo</code>\u3002</p><p>package.json</p><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo $PATH&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="inject-\u74B0\u5883\u8B8A\u91CF" tabindex="-1">inject \u74B0\u5883\u8B8A\u91CF <a class="header-anchor" href="#inject-\u74B0\u5883\u8B8A\u91CF" aria-hidden="true">#</a></h3><p>\u5728 terminal \u8F38\u5165<code>echo $PATH &amp; npm run echo</code>\uFF0C\u4ED6\u6703\u5370\u51FA PATH \u7684\u74B0\u5883\u8B8A\u91CF\u8DDF\u5728 npm run-script \u88E1\u9762\u7684\u74B0\u5883\u8B8A\u91CF\uFF0C\u5982\u5716</p><p><img src="`+c+'" alt="\u74B0\u5883\u8B8A\u91CF"></p><p>\u4F60\u6703\u767C\u73FE\u591A\u4E86\u597D\u5E7E\u500B xxx/xxx/node_modules/.bin \u7684\u6771\u897F\uFF0C\u9019\u4E9B\u74B0\u5883\u8B8A\u91CF\u5C31\u662F\u5728\u57F7\u884C npm run-script \u7684\u6642\u5019\u52A0\u4E0A\u53BB\u7684\uFF0C\u57F7\u884C\u5B8C\u4E4B\u5F8C\u53C8\u79FB\u9664\u3002</p><p>\u4ED6\u7684\u898F\u5247\uFF0C\u5C31\u662F\u7576\u4E0B\u7684\u76EE\u9304\u627E\u4E0D\u5230\u8A72 modules \u7684 bin \u5C31\u5F80<code>\u4E0A\u4E00\u5C64\u76EE\u9304</code>\u627E\uFF0C\u76F4\u5230<code>\u6839\u76EE\u9304</code>\uFF0C\u5C31\u4E5F\u662F nodejs \u5F15\u7528 modules \u7684\u898F\u5247\u5E95\u5C64\u6A5F\u5236\u3002</p><h3 id="bin-\u57F7\u884C\u6A94" tabindex="-1">.bin \u57F7\u884C\u6A94 <a class="header-anchor" href="#bin-\u57F7\u884C\u6A94" aria-hidden="true">#</a></h3><p>\u8F38\u5165<code>npm i eslint</code>\u5B89\u88DD eslint\uFF0C\u5B89\u88DD\u5B8C\u4E4B\u5F8C\uFF0C\u6703\u767C\u73FE\u5728<code>./node_modules/.bin</code>\u591A\u4E86\u5E7E\u500B\u6A94\u6848\uFF0C\u7528<code>ls -alh</code>\u53BB\u770B\u4E00\u4E0B\u4ED6\u7684\u72C0\u614B\uFF0C\u767C\u73FE eslint \u4ED6\u662F\u4E00\u500B<code>link</code>\uFF0C\u6307\u5411<code>./node_modules/eslint/bin/eslint.js</code>\u7684\u6A94\u6848\u3002</p><p>\u5B89\u88DD package \u7684\u6642\u5019\uFF0C\u6703\u5728/node_modules/.bin \u88E1\u9762\u751F\u6210\u76F8\u5C0D\u61C9\u7684 link\uFF0C\u8A72 link \u6703\u6307\u5411\u8A72 package \u7684<code>\u5165\u53E3js\u6A94\u6848</code>\uFF0C\u7136\u5F8C\u5728\u57F7\u884C npm run-script \u7684\u6642\u5019\uFF0C\u56E0\u70BA inject \u4E86.bin \u7684\u74B0\u5883\u8B8A\u91CF\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5728 npm run-script \u88E1\u9762\u76F4\u63A5\u4F7F\u7528\u8A72 package\u3002</p><p>\u4F7F\u7528 <code>bunx\u6216\u662Fnpx</code> &lt;\u5305\u540D\u7A31&gt;\uFF0C\u6703\u5148\u627E./node_modules/.bin \u88E1\u9762\u7684\u6A94\u6848\uFF0C\u53EF\u4EE5\u900F\u904E\u9019\u6A23\u7684\u65B9\u5F0F\u53BB\u57F7\u884C\u5C08\u6848\u88E1\u9762\u5B89\u88DD\u7684\u5957\u4EF6</p><p><img src="'+r+`" alt="link"></p><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo $PATH&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="npm-run-script-\u7684\u4E32\u884C\u8DDF\u4F75\u884C" tabindex="-1">npm run-script \u7684\u4E32\u884C\u8DDF\u4F75\u884C <a class="header-anchor" href="#npm-run-script-\u7684\u4E32\u884C\u8DDF\u4F75\u884C" aria-hidden="true">#</a></h2><ul><li>\u4E32\u884C\uFF1A\u4E00\u500B\u57F7\u884C\u5B8C\uFF0C\u63DB\u4E0B\u4E00\u500B\u57F7\u884C\uFF0C\u7B26\u865F\u662F<code>&amp;&amp;</code></li><li>\u4E26\u884C\uFF1A\u6240\u6709\u53EA\u6709\u4E00\u8D77\u540C\u6642\u57F7\u884C\uFF0C\u7B26\u865F\u662F<code>&amp;</code></li></ul><h3 id="\u4E32\u884C" tabindex="-1">\u4E32\u884C <a class="header-anchor" href="#\u4E32\u884C" aria-hidden="true">#</a></h3><p>\u6709\u500B scripts \u8A2D\u5B9A\u5982\u4E0B</p><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lint:js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint *.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:css&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint *.less&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:json&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonlint --quiet *.json&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run lint:js &amp;&amp; npm run lint:css &amp;&amp; npm run lint:json&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><br><p>\u6211\u5011\u4F7F\u7528<code>&amp;&amp;</code>\uFF0C\u628A npm run-script \u4E32\u9023\u8D77\u4F86\uFF0C\u4E00\u500B\u63A5\u8457\u4E00\u500B\u57F7\u884C\uFF0C\u5C31\u662F<code>lint:js</code>\u57F7\u884C\u5B8C\u4E86\u63DB\u5230<code>lint:css</code>\u57F7\u884C\uFF0C\u7136\u5F8C<code>lint:json</code></p><h3 id="\u4F75\u884C" tabindex="-1">\u4F75\u884C <a class="header-anchor" href="#\u4F75\u884C" aria-hidden="true">#</a></h3><p>\u4F75\u884C\u5C31\u662F\u540C\u6642\u57F7\u884C\uFF0C\u53EA\u8981\u628A<code>&amp;&amp;</code>\u63DB\u6210<code>&amp;</code>\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4F46\u662F\u56E0\u70BA\u4F75\u884C\u4ED6\u662F\u4F7F\u7528<code>\u5B50\u9032\u7A0B(subprocess)</code>\u4F86\u57F7\u884C npm run-script\uFF0C\u5047\u5982\u6C92\u4E0B<code>wait</code>\u6307\u4EE4\uFF0C<code>\u4E3B\u9032\u7A0B</code>\u4E0D\u6703\u7B49\u6240\u6709<code>\u5B50\u9032\u7A0B\u5168\u57F7\u884C\u5B8C</code>\uFF0C\u5F8C\u9762\u6C92\u6307\u4EE4\u4ED6\u5C31 exit \u8DF3\u51FA\u4E86\uFF0C\u7136\u5F8C watch \u7684<code>\u5B50\u9032\u7A0B\u4E5F\u6703\u88AB\u4E2D\u65B7</code>\uFF0C\u8A2D\u5B9A\u5982\u4E0B\u3002</p><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lint:js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint *.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:css&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint *.less&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:json&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonlint --quiet *.json&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;jest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jest --watchAll&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run lint:js &amp; npm run lint:css &amp; npm run lint:json &amp; npm run jest &amp; wait&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>npm-run-all</code>package\uFF0C\u8B93\u4EE3\u78BC\u770B\u8D77\u4F86\u66F4\u7C21\u6F54\u4E00\u9EDE\uFF0C\u52A0\u4E0A<code>--parallel</code>\u4EE3\u8868\u662F<code>\u4F75\u884C</code>\uFF0C\u6C92\u52A0\u5C31\u662F\u4E32\u884C\u3002</p><div class="language-bash"><pre><code><span class="token function">npm</span> i npm-run-all -D
</code></pre></div><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lint:js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint *.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:css&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint *.less&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:json&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonlint --quiet *.json&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;jest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jest --watchAll&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm-run-all --parallel lint:* jest &amp; wait&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="pre-post-scripts" tabindex="-1">pre &amp; post scripts <a class="header-anchor" href="#pre-post-scripts" aria-hidden="true">#</a></h2><p>\u9019\u662F\u8B93\u4F60\u5728\u57F7\u884C\u67D0\u500B npm run-script<code>\u4E4B\u524D</code>\u8DDF<code>\u4E4B\u5F8C</code>\uFF0C\u89F8\u767C scripts\uFF0C\u53EA\u8981\u5728\u8A72 script \u7684\u524D\u9762\u52A0\u4E0A<code>pre</code>\u6216\u662F<code>post</code>\u5C31\u53EF\u4EE5\u4E86\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;preecho&quot;</span><span class="token operator">:</span><span class="token string">&quot;echo a&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo $PATH&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;postecho&quot;</span><span class="token operator">:</span><span class="token string">&quot;echo b&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><div class="language-bash"><pre><code><span class="token function">npm</span> run <span class="token builtin class-name">echo</span>
<span class="token comment"># \u6703\u5148\u5370\u51FAa, \u5728\u5370\u51FA\u74B0\u5883\u8B8A\u91CFPATH, \u5728\u5370\u51FAb</span>
</code></pre></div><h2 id="\u8DE8\u5E73\u53F0\u7684-npm-run-script-\u8655\u7406" tabindex="-1">\u8DE8\u5E73\u53F0\u7684 npm run-script \u8655\u7406 <a class="header-anchor" href="#\u8DE8\u5E73\u53F0\u7684-npm-run-script-\u8655\u7406" aria-hidden="true">#</a></h2><h3 id="\u539F\u751F\u5BEB\u6CD5" tabindex="-1">\u539F\u751F\u5BEB\u6CD5 <a class="header-anchor" href="#\u539F\u751F\u5BEB\u6CD5" aria-hidden="true">#</a></h3><p>linux-like \u7CFB\u7D71\u8DDF windows \u57F7\u884C\u6307\u4EE4\u4E0D\u4E00\u6A23\uFF0C\u6240\u4EE5\u4E0D\u662F<code>\u5206\u5225\u5BEB\u5169\u7A2E scripts</code>\uFF0C\u91DD\u5C0D linux-like \u7CFB\u7D71\u8DDF windows\uFF0C\u5C31\u662F\u900F\u904E\u5957\u4EF6\u5E6B\u4F60\u8655\u7406\u3002\u5982\u4E0B\u9762\u7BC4\u4F8B\uFF0C\u8A2D\u5B9A\u74B0\u5883\u8B8A\u91CF\u9664\u4E86\u8981\u591A\u500B<code>set</code>\u4E4B\u5916\uFF0C\u9084\u8981\u52A0\u4E0A<code>&amp;&amp;</code>\u53BB\u9023\u7D50\u6307\u4EE4\uFF0C\u800C\u4E14<code>\u4E0D\u80FD\u6709\u7A7A\u767D</code></p><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span><span class="token string">&quot;BASE=dev node index.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;win-dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set BASE=dev&amp;&amp;node index.js&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="\u5957\u4EF6\u5BEB\u6CD5" tabindex="-1">\u5957\u4EF6\u5BEB\u6CD5 <a class="header-anchor" href="#\u5957\u4EF6\u5BEB\u6CD5" aria-hidden="true">#</a></h3><p>\u5B89\u88DD cross-env \u5957\u4EF6\uFF0C\u7136\u5F8C\u5728 scripts \u524D\u9762\u52A0\u4E0A cross-env\uFF0C\u4ED6\u5C31\u6703\u5E6B\u4F60\u8655\u7406 windows \u5E73\u53F0\u8A2D\u5B9A\u74B0\u5883\u8B8A\u91CF\u7684\u554F\u984C\u4E86\u3002\u8A71\u8AAA cross-env \u9019\u5957\u4EF6\u662F kentcdodds \u505A\u7684\uFF0C2020 \u5E74\u5E95\u4ED6\u5C31\u5BA3\u5E03\u4E0D\u5728\u7DAD\u8B77\u4E86\uFF0Cgithub \u4E0A\u5BEB\u4E86\u5169\u500B\u63A8\u85A6\u7684\u5957\u4EF6\uFF0C\u7D50\u679C\u6BD4\u4ED6\u9019\u500B\u9084\u820A\u9084\u4E0D active \u662F...xd</p><div class="language-bach"><pre><code>npm i cross-env
</code></pre></div><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span><span class="token string">&quot;cross-env  BASE=dev node index.js&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u5176\u4ED6\u985E\u4F3C\u7684\u6771\u897F\u505A\u500B\u7D71\u6574\uFF0C\u5982\u4E0B\uFF1A</p><ul><li>cross-env\uFF1A\u8A2D\u5B9A\u74B0\u5883\u8B8A\u91CF</li><li>rimraf\uFF1A\u522A\u9664\u6A94\u6848</li><li>cpr\uFF1A\u8907\u88FD\u6A94\u6848</li><li>make-dir-cli\uFF1A\u5EFA\u7ACB\u8CC7\u6599\u593E</li></ul><p>\u9019\u4E9B\u6771\u897F\u5E95\u5C64\u539F\u7406\u6838\u5FC3\u90FD\u662F\uFF0C\u7528<code>process.arch</code>\u53BB\u5224\u65B7\u4F5C\u696D\u7CFB\u7D71\uFF0C<code>parse\u53C3\u6578</code>\uFF0C\u7136\u5F8C\u7528<code>process.spawn</code>\u53BB\u57F7\u884C\u547D\u4EE4</p>`,46);function u(d,k,m,q,h,g){const s=o("Comment");return e(),a("div",null,[l,t(s)])}var _=n(i,[["render",u]]);export{v as __pageData,_ as default};
