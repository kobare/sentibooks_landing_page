---
layout: page
title: Features
subtitle: Everything a Kenyan business needs, from job intake to financial close.
description: "Explore the full Sentibooks feature set: invoicing, quotations, work orders, inventory, banking, procurement, POS, payroll, and full accounting."
permalink: /features/
breadcrumb:
  - name: Features
    url: /features/
cta: false
wide: true
---

Sentibooks covers the full business cycle of a Kenyan business. Every feature below is built into the platform. There are no add-on modules to buy.

<div class="not-prose grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
{% for feature in site.data.features.items %}
<a href="#{{ feature.title | slugify }}" class="group block bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#00B057] hover:shadow-lg transition-all">
  <div class="h-12 w-12 {{ feature.icon_bg | default: 'bg-accent-gradient' }} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="{{ feature.icon_path }}" />
    </svg>
  </div>
  <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00B057] transition-colors">{{ feature.title }}</h3>
  <p class="text-base text-gray-600 leading-relaxed">{{ feature.description }}</p>
</a>
{% endfor %}
</div>

## How the features fit together

<div class="not-prose mt-8 bg-blue-gradient rounded-2xl p-8 md:p-10 text-white">

<h3 class="text-2xl font-extrabold mb-6">The flow through your business</h3>

<div class="grid md:grid-cols-3 gap-8">

<div>
  <p class="text-xs font-bold uppercase tracking-wider text-[#00B057] mb-3">Before the sale</p>
  <ul class="space-y-3 text-sm text-blue-100">
    <li class="flex items-start gap-2"><span class="text-[#00B057] font-bold">&#8594;</span> Customer and item catalogue set up</li>
    <li class="flex items-start gap-2"><span class="text-[#00B057] font-bold">&#8594;</span> Quotation or estimate raised</li>
    <li class="flex items-start gap-2"><span class="text-[#00B057] font-bold">&#8594;</span> Price list applied per customer</li>
    <li class="flex items-start gap-2"><span class="text-[#00B057] font-bold">&#8594;</span> Approval captured</li>
  </ul>
</div>

<div>
  <p class="text-xs font-bold uppercase tracking-wider text-[#00B057] mb-3">During the work</p>
  <ul class="space-y-3 text-sm text-blue-100">
    <li class="flex items-start gap-2"><span class="text-[#00B057] font-bold">&#8594;</span> Work order created and assigned</li>
    <li class="flex items-start gap-2"><span class="text-[#00B057] font-bold">&#8594;</span> Stock drawn from inventory, logged</li>
    <li class="flex items-start gap-2"><span class="text-[#00B057] font-bold">&#8594;</span> Progress tracked, supplements raised</li>
    <li class="flex items-start gap-2"><span class="text-[#00B057] font-bold">&#8594;</span> Purchase orders raised for suppliers</li>
  </ul>
</div>

<div>
  <p class="text-xs font-bold uppercase tracking-wider text-[#00B057] mb-3">After completion</p>
  <ul class="space-y-3 text-sm text-blue-100">
    <li class="flex items-start gap-2"><span class="text-[#00B057] font-bold">&#8594;</span> Invoice raised from the work order</li>
    <li class="flex items-start gap-2"><span class="text-[#00B057] font-bold">&#8594;</span> Payment recorded (cash, M-Pesa, bank)</li>
    <li class="flex items-start gap-2"><span class="text-[#00B057] font-bold">&#8594;</span> VAT and statutory entries posted</li>
    <li class="flex items-start gap-2"><span class="text-[#00B057] font-bold">&#8594;</span> Trial balance and reports updated</li>
  </ul>
</div>

</div>

</div>

## Why businesses choose Sentibooks

<div class="not-prose mt-8 grid md:grid-cols-3 gap-6">

<div class="bg-white border border-gray-200 rounded-2xl p-6">
  <div class="text-2xl mb-3">&#127472;&#127466;</div>
  <h4 class="font-bold text-gray-900 mb-2">Built for Kenya</h4>
  <p class="text-sm text-gray-600">Pre-loaded Kenyan chart of accounts, automatic VAT, PAYE, SHIF, NSSF, and Housing Levy. KRA PIN stored against your organisation.</p>
</div>

<div class="bg-white border border-gray-200 rounded-2xl p-6">
  <div class="text-2xl mb-3">&#128274;</div>
  <h4 class="font-bold text-gray-900 mb-2">Audit-ready</h4>
  <p class="text-sm text-gray-600">Every change is logged. Authorisations, approvals, and customer sign-offs are stored against the work order.</p>
</div>

<div class="bg-white border border-gray-200 rounded-2xl p-6">
  <div class="text-2xl mb-3">&#128241;</div>
  <h4 class="font-bold text-gray-900 mb-2">Works on any device</h4>
  <p class="text-sm text-gray-600">Front desk, workshop floor, back office. All on one system, reachable from a phone, tablet, or laptop.</p>
</div>

</div>
