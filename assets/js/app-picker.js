---
---
(function() {
  var STORAGE_KEY = 'sentibooks_app_url';
  var apps = [
    {% for app in site.data.apps.apps %}
    {
      name: {{ app.name | jsonify }},
      desc: {{ app.desc | jsonify }},
      url: {{ app.url | jsonify }},
      icon: {{ app.icon | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  var lastFocused = null;

  function renderApps() {
    var list = document.getElementById('appList');
    if (!list) return;
    list.innerHTML = apps.map(function(app) {
      return '<a href="' + app.url + '" class="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 transition group">'
        + '<div class="h-12 w-12 rounded-xl bg-[#0B2A6A]/10 text-[#0B2A6A] flex items-center justify-center shrink-0 transition group-hover:bg-[#00B057]/10 group-hover:text-[#00B057]">'
        + '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="' + app.icon + '" /></svg>'
        + '</div>'
        + '<div class="flex-1 min-w-0">'
        + '<div class="font-semibold text-gray-900">' + app.name + '</div>'
        + '<div class="text-sm text-gray-500 leading-snug">' + app.desc + '</div>'
        + '</div>'
        + '<svg class="w-5 h-5 text-gray-300 group-hover:text-[#00B057] transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>'
        + '</a>';
    }).join('');
  }

  window.openAppPicker = function(e) {
    if (e) e.preventDefault();

    var remembered = null;
    try { remembered = localStorage.getItem(STORAGE_KEY); } catch (err) {}

    if (remembered && !window.openAppPicker.forceShow) {
      window.location.href = remembered;
      return;
    }
    window.openAppPicker.forceShow = false;

    var rememberBox = document.getElementById('rememberChoice');
    if (rememberBox) rememberBox.checked = false;

    lastFocused = document.activeElement;
    var m = document.getElementById('appPickerModal');
    if (!m) return;
    m.classList.remove('hidden');
    m.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  window.closeAppPicker = function() {
    var m = document.getElementById('appPickerModal');
    if (!m) return;
    m.classList.add('hidden');
    m.classList.remove('flex');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  };

  document.addEventListener('DOMContentLoaded', function() {
    renderApps();

    var modal = document.getElementById('appPickerModal');
    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) window.closeAppPicker();
      });
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        var m = document.getElementById('appPickerModal');
        if (m && !m.classList.contains('hidden')) window.closeAppPicker();
      }
    });

    var list = document.getElementById('appList');
    if (list) {
      list.addEventListener('click', function(e) {
        var link = e.target.closest('a');
        if (!link || !link.href) return;
        var remember = document.getElementById('rememberChoice');
        try {
          if (remember && remember.checked) {
            localStorage.setItem(STORAGE_KEY, link.href);
          } else {
            localStorage.removeItem(STORAGE_KEY);
          }
        } catch (err) {}
      });
    }
  });
})();
